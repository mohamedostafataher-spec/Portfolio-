import React, { createContext, useContext, useState, useEffect } from 'react';
import defaultAvatar from '../assets/images/mohamed_avatar.jpg';

interface AvatarContextType {
  avatarUrl: string;
  updateAvatar: (file: File) => Promise<boolean>;
  resetAvatar: () => void;
  isCustom: boolean;
  isLoading: boolean;
}

const AvatarContext = createContext<AvatarContextType>({
  avatarUrl: defaultAvatar,
  updateAvatar: async () => false,
  resetAvatar: () => {},
  isCustom: false,
  isLoading: true,
});

const DB_NAME = 'MohamedPortfolioDB_v2';
const STORE_NAME = 'user_assets';
const AVATAR_KEY = 'mohamed_custom_avatar_blob';

// IndexedDB Helper
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveToIndexedDB(key: string, data: Blob | string): Promise<boolean> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(data, key);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('IndexedDB save error:', err);
    return false;
  }
}

async function getFromIndexedDB(key: string): Promise<Blob | string | null> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('IndexedDB get error:', err);
    return null;
  }
}

async function deleteFromIndexedDB(key: string): Promise<boolean> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(key);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('IndexedDB delete error:', err);
    return false;
  }
}

export const AvatarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [avatarUrl, setAvatarUrl] = useState<string>(defaultAvatar);
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let active = true;
    let objectUrlToRevoke: string | null = null;

    async function loadStoredAvatar() {
      try {
        const stored = await getFromIndexedDB(AVATAR_KEY);
        if (stored && active) {
          if (stored instanceof Blob) {
            const blobUrl = URL.createObjectURL(stored);
            objectUrlToRevoke = blobUrl;
            setAvatarUrl(blobUrl);
            setIsCustom(true);
          } else if (typeof stored === 'string') {
            setAvatarUrl(stored);
            setIsCustom(true);
          }
        }
      } catch (err) {
        console.warn('Error loading custom avatar:', err);
      } finally {
        if (active) setIsLoading(false);
      }
    }

    loadStoredAvatar();

    return () => {
      active = false;
      if (objectUrlToRevoke) {
        URL.revokeObjectURL(objectUrlToRevoke);
      }
    };
  }, []);

  const updateAvatar = async (file: File): Promise<boolean> => {
    try {
      // Direct high quality save
      await saveToIndexedDB(AVATAR_KEY, file);
      
      const newUrl = URL.createObjectURL(file);
      setAvatarUrl(newUrl);
      setIsCustom(true);
      return true;
    } catch (err) {
      console.error('Failed to update avatar:', err);
      return false;
    }
  };

  const resetAvatar = async () => {
    try {
      await deleteFromIndexedDB(AVATAR_KEY);
    } catch {}
    setAvatarUrl(defaultAvatar);
    setIsCustom(false);
  };

  return (
    <AvatarContext.Provider value={{ avatarUrl, updateAvatar, resetAvatar, isCustom, isLoading }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => useContext(AvatarContext);

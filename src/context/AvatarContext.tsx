import React, { createContext, useContext, useState, useEffect } from 'react';
import defaultAvatar from '../assets/images/mohamed_avatar.jpg';

interface AvatarContextType {
  avatarUrl: string;
  updateAvatar: (file: File) => Promise<boolean>;
  resetAvatar: () => void;
  isCustom: boolean;
}

const AvatarContext = createContext<AvatarContextType>({
  avatarUrl: defaultAvatar,
  updateAvatar: async () => false,
  resetAvatar: () => {},
  isCustom: false,
});

export const AvatarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [avatarUrl, setAvatarUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('mohamed_exact_avatar');
      return saved || defaultAvatar;
    } catch {
      return defaultAvatar;
    }
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    try {
      return !!localStorage.getItem('mohamed_exact_avatar');
    } catch {
      return false;
    }
  });

  const updateAvatar = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          try {
            localStorage.setItem('mohamed_exact_avatar', result);
            setAvatarUrl(result);
            setIsCustom(true);
            resolve(true);
          } catch (err) {
            console.error('Storage error', err);
            setAvatarUrl(result);
            setIsCustom(true);
            resolve(true);
          }
        } else {
          resolve(false);
        }
      };
      reader.onerror = () => resolve(false);
      reader.readAsDataURL(file);
    });
  };

  const resetAvatar = () => {
    try {
      localStorage.removeItem('mohamed_exact_avatar');
    } catch {}
    setAvatarUrl(defaultAvatar);
    setIsCustom(false);
  };

  return (
    <AvatarContext.Provider value={{ avatarUrl, updateAvatar, resetAvatar, isCustom }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => useContext(AvatarContext);

import React, { createContext, useContext, useState, useEffect } from 'react';

interface OwnerContextType {
  isOwnerAuthenticated: boolean;
  isClientPreview: boolean;
  isOwnerMode: boolean; // true only when authenticated AND not previewing as client
  login: (secret: string) => boolean;
  logout: () => void;
  toggleClientPreview: () => void;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  isLoginModalOpen: boolean;
}

const OwnerContext = createContext<OwnerContextType | undefined>(undefined);

export const OwnerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOwnerAuthenticated, setIsOwnerAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem('mm_owner_auth') === 'true';
    } catch {
      return false;
    }
  });

  const [isClientPreview, setIsClientPreview] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      if (isOwnerAuthenticated) {
        localStorage.setItem('mm_owner_auth', 'true');
      } else {
        localStorage.removeItem('mm_owner_auth');
      }
    } catch {
      // ignore
    }
  }, [isOwnerAuthenticated]);

  const login = (secret: string): boolean => {
    const trimmed = secret.trim().toLowerCase();
    // Valid passwords: default PIN 2026, admin, or user's email
    if (
      trimmed === '2026' ||
      trimmed === 'admin' ||
      trimmed === 'mohamed' ||
      trimmed === 'mohamedostafataher@gmail.com'
    ) {
      setIsOwnerAuthenticated(true);
      setIsClientPreview(false);
      setIsLoginModalOpen(false);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsOwnerAuthenticated(false);
    setIsClientPreview(false);
  };

  const toggleClientPreview = () => {
    setIsClientPreview((prev) => !prev);
  };

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const isOwnerMode = isOwnerAuthenticated && !isClientPreview;

  return (
    <OwnerContext.Provider
      value={{
        isOwnerAuthenticated,
        isClientPreview,
        isOwnerMode,
        login,
        logout,
        toggleClientPreview,
        openLoginModal,
        closeLoginModal,
        isLoginModalOpen,
      }}
    >
      {children}
    </OwnerContext.Provider>
  );
};

export const useOwner = (): OwnerContextType => {
  const context = useContext(OwnerContext);
  if (!context) {
    throw new Error('useOwner must be used within an OwnerProvider');
  }
  return context;
};

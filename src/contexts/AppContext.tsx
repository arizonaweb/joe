import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from '@/components/ui/use-toast';

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  formAnswers: Record<string, string | string[]>;
  updateAnswer: (id: string, value: string | string[]) => void;
  clearAnswers: () => void;
}

const defaultAppContext: AppContextType = {
  sidebarOpen: false,
  toggleSidebar: () => {},
  formAnswers: {},
  updateAnswer: () => {},
  clearAnswers: () => {},
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formAnswers, setFormAnswers] = useState<Record<string, string | string[]>>(() => {
    try {
      const raw = localStorage.getItem('proaz_form_answers');
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('proaz_form_answers', JSON.stringify(formAnswers));
    } catch (e) {
      // ignore
    }
  }, [formAnswers]);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const updateAnswer = (id: string, value: string | string[]) => {
    setFormAnswers(prev => ({ ...prev, [id]: value }));
  };

  const clearAnswers = () => {
    setFormAnswers({});
    try {
      localStorage.removeItem('proaz_form_answers');
    } catch (e) {}
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        formAnswers,
        updateAnswer,
        clearAnswers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

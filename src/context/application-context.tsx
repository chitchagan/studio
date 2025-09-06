"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';

// This context is no longer used for applications, but we keep the provider structure
// in case we want to add other global state in the future.

interface AppContextType {
  // Add any future global state or functions here
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const ApplicationProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();

  // All application-related state and functions have been removed.

  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an ApplicationProvider');
  }
  return context;
};

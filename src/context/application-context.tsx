"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import type { Job, Application } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface ApplicationContextType {
  applications: Application[];
  addApplication: (job: Job) => void;
  updateApplicationStatus: (jobId: string, status: Application['status']) => void;
  isJobApplied: (jobId: string) => boolean;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export const ApplicationProvider = ({ children }: { children: ReactNode }) => {
  const [applications, setApplications] = useState<Application[]>([]);
  const { toast } = useToast();

  const addApplication = useCallback((job: Job) => {
    setApplications(prev => {
      if (prev.some(app => app.job.id === job.id)) {
        toast({
          title: "Already Applied",
          description: `You have already applied for the "${job.title}" position.`,
        });
        return prev;
      }
      const newApplication: Application = {
        job,
        appliedDate: new Date().toISOString(),
        status: 'Applied',
      };
      toast({
        title: "Application Sent!",
        description: `Your application for "${job.title}" has been recorded.`,
      });
      return [newApplication, ...prev];
    });
  }, [toast]);

  const updateApplicationStatus = useCallback((jobId: string, status: Application['status']) => {
    setApplications(prev =>
      prev.map(app =>
        app.job.id === jobId ? { ...app, status } : app
      )
    );
     toast({
        title: "Status Updated",
        description: `The status for the job application has been updated to "${status}".`,
      });
  }, [toast]);

  const isJobApplied = useCallback((jobId: string) => {
    return applications.some(app => app.job.id === jobId);
  }, [applications]);

  return (
    <ApplicationContext.Provider value={{ applications, addApplication, updateApplicationStatus, isJobApplied }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplications = (): ApplicationContextType => {
  const context = useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error('useApplications must be used within an ApplicationProvider');
  }
  return context;
};

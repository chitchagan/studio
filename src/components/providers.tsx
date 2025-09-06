"use client";

import { type ReactNode } from 'react';
import { ApplicationProvider } from '@/context/application-context';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ApplicationProvider>
      <TooltipProvider>{children}</TooltipProvider>
      <Toaster />
    </ApplicationProvider>
  );
}

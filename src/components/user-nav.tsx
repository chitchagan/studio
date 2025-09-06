"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockUser } from '@/lib/data';
import Link from 'next/link';
import { LifeBuoy, LogOut, Settings } from 'lucide-react';

export function UserNav() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" asChild>
        <Link href="/profile">Contact Us</Link>
      </Button>
    </div>
  );
}

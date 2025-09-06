"use client";

import { mockUser } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold tracking-tight">Your Profile</h1>
        <p className="text-muted-foreground mt-2">Manage your professional information to get the best job matches.</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
              <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="text-2xl font-headline">{mockUser.name}</CardTitle>
              <CardDescription>{mockUser.email}</CardDescription>
            </div>
            <Button variant="outline">Edit Profile</Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Separator />
          <div>
            <h3 className="text-lg font-semibold font-headline mb-3">Your Skills</h3>
            <div className="flex flex-wrap gap-2">
              {mockUser.skills.map(skill => (
                <Badge key={skill} className="text-sm px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="text-lg font-semibold font-headline mb-3">Experience Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              {mockUser.experience}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { useApplications } from "@/context/application-context";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { Application } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function ApplicationsPage() {
  const { applications, updateApplicationStatus } = useApplications();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold tracking-tight">My Applications</h1>
        <p className="text-muted-foreground mt-2">Track the status of all your job applications in one place.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Application History</CardTitle>
          <CardDescription>
            You have applied to {applications.length} job{applications.length !== 1 && 's'}.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {applications.length > 0 ? (
            <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%]">Job Title</TableHead>
                  <TableHead>Date Applied</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((app) => (
                  <TableRow key={app.job.id}>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10 rounded-sm hidden sm:flex">
                          <AvatarImage src={app.job.logo} alt={app.job.company} data-ai-hint="logo" />
                          <AvatarFallback>{app.job.company.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <Link href={`/jobs/${app.job.id}`} className="font-medium hover:underline">
                            {app.job.title}
                          </Link>
                          <div className="text-sm text-muted-foreground">{app.job.company}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Date(app.appliedDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <Select
                        value={app.status}
                        onValueChange={(value: Application['status']) =>
                          updateApplicationStatus(app.job.id, value)
                        }
                      >
                        <SelectTrigger className="w-[130px] ml-auto">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Applied"><Badge className="bg-blue-500">Applied</Badge></SelectItem>
                          <SelectItem value="In Review"><Badge className="bg-yellow-500">In Review</Badge></SelectItem>
                          <SelectItem value="Interview"><Badge className="bg-purple-500">Interview</Badge></SelectItem>
                          <SelectItem value="Offered"><Badge className="bg-green-500">Offered</Badge></SelectItem>
                          <SelectItem value="Rejected"><Badge className="bg-red-500">Rejected</Badge></SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </div>
          ) : (
            <div className="text-center py-16">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">No Applications Yet</h3>
              <p className="mt-1 text-sm text-muted-foreground">Start applying for jobs to see them here.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

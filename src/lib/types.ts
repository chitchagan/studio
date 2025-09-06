export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  salary?: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Live Interactive Training';
  postedDate: string;
  logo: string;
};

export type UserProfile = {
  name: string;
  email: string;
  avatar: string;
  skills: string[];
  experience: string;
  searchHistory: string[];
};

export type Application = {
  job: Job;
  appliedDate: string;
  status: 'Applied' | 'In Review' | 'Interview' | 'Offered' | 'Rejected';
};

export type Tool = {
  name: string;
  logo: string;
};

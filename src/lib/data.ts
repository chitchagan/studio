import type { Job, UserProfile, Tool } from './types';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Generative AI Foundations Program',
    company: 'Generative AI Training Company',
    location: '',
    description: `Our Generative AI Foundations Program is designed to provide a comprehensive understanding of core generative AI concepts. This program is ideal for developers, product managers, and tech leaders looking to build a strong foundation in AI.
Key Learning Objectives:
- Understand the fundamentals of large language models (LLMs).
- Explore different generative model architectures.
- Gain hands-on experience with prompt engineering and fine-tuning.
- Learn to build applications with generative AI APIs.
Required Skills: Basic Python knowledge, familiarity with APIs.`,
    salary: '25,000 INR',
    type: 'Live Interactive Training',
    postedDate: '2024-07-20',
    logo: 'https://picsum.photos/seed/innovate/100/100'
  },
  {
    id: '2',
    title: 'Agentic AI Practitioner Course',
    company: 'Generative AI Training Company',
    location: '',
    description: `The Agentic AI Practitioner Course focuses on building autonomous AI agents that can reason, plan, and execute tasks. This advanced course is for experienced developers and AI engineers who want to build sophisticated AI systems.
Key Learning Objectives:
- Learn about agent architectures like ReAct and Tree of Thoughts.
- Implement multi-agent systems for complex problem-solving.
- Integrate tools and external APIs with your agents.
- Develop strategies for testing and evaluating AI agents.
Required Skills: Advanced Python, Experience with LLMs, API Development.`,
    salary: '25,000 INR',
    type: 'Live Interactive Training',
    postedDate: '2024-07-19',
    logo: 'https://picsum.photos/seed/datadriven/100/100'
  }
];

export const mockUser: UserProfile = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  avatar: 'https://picsum.photos/seed/user/100/100',
  skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Product Management'],
  experience: '5+ years as a full-stack developer and technical lead. Led a team of 5 engineers to launch a new B2B SaaS product. Passionate about building scalable and user-friendly applications.',
  searchHistory: ['Frontend Engineer', 'Product Manager', 'React Developer jobs in San Francisco']
};

export const mockTools: Tool[] = [
    { name: 'ChatGPT', logo: 'https://picsum.photos/seed/chatgpt/100/100' },
    { name: 'Gemini', logo: 'https://picsum.photos/seed/gemini/100/100' },
    { name: 'Grok', logo: 'https://picsum.photos/seed/grok/100/100' },
    { name: 'Make.com', logo: 'https://picsum.photos/seed/make/100/100' },
    { name: 'Claude', logo: 'https://picsum.photos/seed/claude/100/100' },
    { name: 'n8n', logo: 'https://picsum.photos/seed/n8n/100/100' },
    { name: 'Replit', logo: 'https://picsum.photos/seed/replit/100/100' },
    { name: 'Cursor', logo: 'https://picsum.photos/seed/cursor/100/100' },
    { name: 'Lovable', logo: 'https://picsum.photos/seed/lovable/100/100' },
    { name: 'Bolt.new', logo: 'https://picsum.photos/seed/bolt/100/100' },
    { name: 'ElevenLabs', logo: 'https://picsum.photos/seed/elevenlabs/100/100' },
    { name: 'Krea.ai', logo: 'https://picsum.photos/seed/krea/100/100' },
    { name: 'Suno.com', logo: 'https://picsum.photos/seed/suno/100/100' },
];

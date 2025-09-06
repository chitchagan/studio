import type { Job, UserProfile } from './types';

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
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'Creative Solutions',
    location: 'Remote',
    description: `Creative Solutions is hiring a talented UX/UI Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UX/UI skills and be able to translate high-level requirements into interaction flows and artifacts.
Key Responsibilities:
- Create wireframes, storyboards, user flows, and site maps.
- Design graphic user interface elements, like menus, tabs, and widgets.
- Adhere to style standards on fonts, colors, and images.
Required Skills: Figma, Sketch, Adobe XD, Prototyping, User Research.`,
    salary: '$90,000 - $110,000',
    type: 'Contract',
    postedDate: '2024-07-18',
    logo: 'https://picsum.photos/seed/creative/100/100'
  },
  {
    id: '4',
    title: 'Product Manager, AI',
    company: 'FutureTech',
    location: 'Austin, TX',
    description: `FutureTech is at the forefront of AI innovation and we're looking for a Product Manager to lead our AI product initiatives. You will define the product vision, strategy, and roadmap. You must have a strong technical background, preferably with experience in machine learning or AI.
Key Responsibilities:
- Define and communicate product strategy.
- Work with engineering teams to deliver features.
- Conduct market research and competitive analysis.
Required Skills: Product Management, Agile, JIRA, Machine Learning, AI.`,
    salary: '$160,000 - $200,000',
    type: 'Full-time',
    postedDate: '2024-07-21',
    logo: 'https://picsum.photos/seed/futuretech/100/100'
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudScale',
    location: 'Seattle, WA',
    description: `CloudScale is looking for a DevOps Engineer to automate and streamline our operations and processes. You will be building and maintaining tools for deployment, monitoring, and operations. A strong background in infrastructure as code (Terraform), CI/CD pipelines, and Kubernetes is required.
Key Responsibilities:
- Manage our Kubernetes clusters and cloud infrastructure on GCP.
- Build and maintain CI/CD pipelines.
- Implement and manage monitoring and alerting.
Required Skills: Kubernetes, Docker, Terraform, GCP, CI/CD, Jenkins.`,
    salary: '$145,000 - $175,000',
    type: 'Full-time',
    postedDate: '2024-07-17',
    logo: 'https://picsum.photos/seed/cloudscale/100/100'
  },
    {
    id: '6',
    title: 'Data Scientist',
    company: 'QuantumLeap Analytics',
    location: 'Boston, MA',
    description: `QuantumLeap Analytics is seeking a Data Scientist to join our growing team. You'll be working with complex datasets to extract valuable insights and build predictive models. The role requires a strong foundation in statistics, machine learning, and programming in Python or R.
Key Responsibilities:
- Analyze large, complex data sets to identify trends and patterns.
- Build, train, and deploy machine learning models.
- Communicate findings to stakeholders.
- Collaborate with data engineers to ensure data quality.
Required Skills: Python, R, SQL, Pandas, Scikit-learn, TensorFlow, Statistics.`,
    salary: '$130,000 - $160,000',
    type: 'Full-time',
    postedDate: '2024-07-16',
    logo: 'https://picsum.photos/seed/quantum/100/100'
  },
];

export const mockUser: UserProfile = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  avatar: 'https://picsum.photos/seed/user/100/100',
  skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Product Management'],
  experience: '5+ years as a full-stack developer and technical lead. Led a team of 5 engineers to launch a new B2B SaaS product. Passionate about building scalable and user-friendly applications.',
  searchHistory: ['Frontend Engineer', 'Product Manager', 'React Developer jobs in San Francisco']
};

import type { Job, UserProfile, Tool } from './types';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Generative AI Foundations Program',
    company: 'Generative AI Training Company',
    location: '',
    description: `Week 1 — Foundations & Text Generation
•	Orient to GenAI vs traditional AI; industry adoption; live demo of LLM capabilities.
•	History and milestones (symbolic → deep learning → transformers; GPT/Stable Diffusion/Gemini; open-source rise).
•	Core concepts: tokenization, embeddings, context windows; “autocomplete at scale.”
•	Prompt engineering best practices (context, role, examples, formats, step-by-step, chaining).
•	Tooling: ChatGPT, Gemini, Claude (strengths/limits); Perplexity, Grok, open models; handling hallucinations.
•	Project: Create (1) an AI-generated blog/FAQ and (2) a persona chatbot (e.g., tech support), practicing prompt iteration and tool selection.
Week 2 — Agentic AI & Automation
•	Agents vs chatbots; planning multi-step tasks (LangChain, AutoGPT concepts).
•	ChatGPT Assistants, browsing/function calling; Copilot/Duet examples.
•	No-/low-code automations: Make.com and n8n demos (summaries, ticket triage, Slack flows).
•	Autonomous agents vs structured workflows; reliability, testing, human-in-the-loop, scaling, cost, security, ethics.
•	Project: Build one automation (notifier, report generator, ticket triager, or Slack Q&A bot) and present lessons learned.
Week 3 — Audio, Image & Video Generation
•	Overview of diffusion, TTS, early video models; ethics (deepfakes, copyright, bias).
•	Image tools (Leonardo, Stable Diffusion, Midjourney): prompting, iteration, inpainting.
•	Audio tools (ElevenLabs, Suno): cloning, multilingual TTS, music gen.
•	Video tools (Google Flow, Krea.ai); text-to-video basics.
•	Multimodal integration (text+image+voice); advanced topics (DreamBooth, negative prompts, chaining); case studies.
•	Project: Produce a creative piece (ad video, comic, podcast, or storybook) combining ≥2 modalities.
Week 4 — Code Generation & Career Growth
•	AI in software dev: autocomplete, debugging, translation; enterprise adoption.
•	Coding with OpenAI/GPTs (prompting, debugging, explanations; data tasks).
•	Gemini for code (Colab export, Gems; Codey/CodeGemma); rising tools (Bolt, Replit Ghostwriter, Cursor, Lovable).
•	Best practices: treat AI as a junior pair programmer; testing, security, licensing; AI-assisted unit tests.
•	Trends: multimodal models, longer context, private models; roles (Prompt Engineer, AI Dev, AI Architect); upskilling and networking.
•	Capstone: Build an app/API/analysis script with AI; present what was AI-generated vs human.
By Day 28, participants will:
•	Grasp GenAI fundamentals, tools, and safety.
•	Ship four practical projects (text, agent, media, code).
•	Be ready to guide teams on realistic GenAI adoption.
•	Map next steps for GenAI-aligned roles and continuous learning.`,
    salary: '25,000 INR',
    type: 'Live Interactive Training',
    postedDate: '2024-07-20',
    logo: ''
  },
  {
    id: '2',
    title: 'Agentic AI Practitioner Course',
    company: 'Generative AI Training Company',
    location: '',
    description: `Week 1 – Foundations of Agentic AI
Focus: Understanding what Agentic AI is and why it matters.
Day 1–2: Concepts – difference between normal AI (single-task) vs. agentic AI (goal → plan → act). Components: LLM “brain,” memory, tools, environment.
Day 3–4: Why corporates need it – HR, IT, Finance, Marketing use cases; overview of tools like ChatGPT Agentic Mode, Make.com, n8n, Bolt.new, Cursor, and Replit.
Day 5 (Mini-Project): Build a simple FAQ Agent answering policy queries from a PDF.
Week 2 – Prompting & Tool Use
Focus: Making agents reliable and useful.
Day 6–9: Prompt engineering (system/role prompts, constraints), multi-step reasoning, tool/API use (workflows with Slack/Email), and memory with vector stores (FAISS, Pinecone free tier).
Day 10 (Mini-Project): Daily News Briefing Agent – pulls RSS feeds, summarizes, and sends updates via Slack/email.
Week 3 – Multi-Agent Workflows & Automation
Focus: Agents collaborating and automating corporate tasks.
Day 11–14: Multi-agent systems (researcher + writer roles), business roles (planner, executor, critic), orchestration tools (LangGraph, CrewAI), and guardrails (compliance, prompt injection).
Day 15 (Mini-Project): Research Analyst + Writer Agent – one gathers industry insights, another drafts an executive summary.
Week 4 – Advanced Applications
Focus: Developer and workflow agents.
Day 16–19: Automations with n8n/Make.com, developer agents (Replit, Cursor), AI app builders (Bolt.new), and evaluation metrics (time, cost saved).
Day 20 (Mini-Project): Sales Assistant Agent – webform → proposal generation → automated email.
Week 5 – Industry Use Cases
Focus: Mapping agents to real functions.
Day 21–24: HR (resume screener, interview assistant), Finance (report generator), IT Ops (ticket triaging), Marketing (campaign generator, competitor analysis).
Day 25 (Mini-Project): Department-Specific Agent – team chooses a domain and builds one automation (e.g., HR candidate tracker).
Week 6 – Capstone & Future Readiness
Focus: Real-world application and forward-looking insights.
Day 26–27: Designing end-to-end solutions; trends like agent marketplaces and self-healing agents.
Day 28–29: Capstone project kickoff and build – teams define a corporate problem and prototype a solution.
Day 30: Final showcase, feedback, and roadmap for safe adoption.`,
    salary: '25,000 INR',
    type: 'Live Interactive Training',
    postedDate: '2024-07-19',
    logo: ''
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
    { name: 'ChatGPT' },
    { name: 'Gemini' },
    { name: 'Grok' },
    { name: 'Make.com' },
    { name: 'Claude' },
    { name: 'n8n' },
    { name: 'Replit' },
    { name: 'Cursor' },
    { name: 'Lovable' },
    { name: 'Bolt.new' },
    { name: 'ElevenLabs' },
    { name: 'Krea.ai' },
    { name: 'Suno.com' },
    { name: 'Open AI' },
    { name: 'Perplexity' },
    { name: 'Zapier' },
    { name: 'Canva' },
    { name: 'Gamma' },
    { name: 'Wispr' },
];

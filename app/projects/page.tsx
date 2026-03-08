import { ExternalLink, Github, Code, Bot, Globe } from "lucide-react";

const projects = [
  {
    title: "Demand Discovery Engine",
    description:
      "Intelligent platform for automatically collecting, filtering, and scoring freelance job opportunities from multiple platforms.",
    longDescription:
      "Built with Python, PostgreSQL, and LLM integration. Collects jobs from Upwork and epwk, filters by budget and skills, scores with AI, and syncs to Feishu.",
    techStack: ["Python", "PostgreSQL", "LLM", "Playwright", "Feishu API"],
    features: [
      "Automated job collection from 2+ platforms",
      "AI-powered job scoring (70+ score threshold)",
      "Feishu synchronization for team collaboration",
      "235+ real jobs collected and analyzed",
    ],
    icon: Bot,
    gradient: "from-blue-500 to-purple-600",
    highlights: "235 jobs collected, 97 synced to Feishu",
    status: "Production",
  },
  {
    title: "Browser Relay Anti-Scraping Solution",
    description:
      "Intelligent web scraping system that bypasses Cloudflare and anti-bot protections using browser automation.",
    longDescription:
      "Uses Playwright with OpenClaw to control Chrome instances with real user sessions. Successfully collected data from Upwork and other protected platforms.",
    techStack: ["Playwright", "OpenClaw", "TypeScript", "PostgreSQL"],
    features: [
      "Bypasses Cloudflare protection",
      "Real browser session integration",
      "Supports login-required pages",
      "Successfully collected 58+ Upwork jobs",
    ],
    icon: Globe,
    gradient: "from-purple-500 to-pink-600",
    highlights: "Bypasses Cloudflare, 58 jobs collected",
    status: "Production",
  },
  {
    title: "Bidding Proposal Generator",
    description:
      "AI-powered system that generates customized bidding proposals for freelance platforms in 15-30 seconds.",
    longDescription:
      "Uses local Ollama LLM to analyze job requirements and generate professional proposals with technical approach, timeline, and pricing suggestions.",
    techStack: ["Python", "Ollama", "LLM", "CLI"],
    features: [
      "15-30 second proposal generation",
      "Customized for each job posting",
      "Includes timeline and pricing",
      "Supports multiple platforms",
    ],
    icon: Code,
    gradient: "from-pink-500 to-orange-600",
    highlights: "15-30s generation, professional quality",
    status: "Production",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-world applications solving actual business problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300"
              >
                {/* Project Header */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient}`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{project.title}</h2>
                        <span className="text-sm text-gray-500">
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {project.highlights}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6 text-lg">
                    {project.longDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 mb-2">
                      TECH STACK
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-2">
                      KEY FEATURES
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-400"
                        >
                          <span className="text-green-400 mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Interested in working together on a similar project?
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </main>
  );
}

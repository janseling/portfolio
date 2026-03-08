const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "TailwindCSS", level: 85 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "OpenAI API", level: 90 },
      { name: "Ollama", level: 85 },
      { name: "LangChain", level: 80 },
      { name: "LLM Integration", level: 90 },
      { name: "Prompt Engineering", level: 85 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Vercel", level: 85 },
      { name: "Linux", level: 80 },
      { name: "Playwright", level: 85 },
    ],
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Playwright",
  "OpenAI",
  "Ollama",
  "Docker",
  "Vercel",
  "Git",
  "TailwindCSS",
  "Framer Motion",
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-400">
            Technologies I work with daily
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900/50 rounded-xl border border-gray-800"
            >
              <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All Technologies */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

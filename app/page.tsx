import Link from "next/link";
import { ArrowRight, Code, Bot, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Full-Stack Developer
            <br />
            & AI Integration Expert
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Building intelligent web applications with modern technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              View Projects <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-gray-700 hover:border-gray-600 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Core Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors duration-200">
            <Code className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-400">
              Modern web applications using Next.js, React, TypeScript, and Node.js
            </p>
          </div>

          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500 transition-colors duration-200">
            <Bot className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
            <p className="text-gray-400">
              LLM applications with OpenAI, Ollama, and custom AI solutions
            </p>
          </div>

          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500 transition-colors duration-200">
            <Zap className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automation</h3>
            <p className="text-gray-400">
              Intelligent automation and data pipelines with Python and Playwright
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="p-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl border border-gray-800">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s discuss your next project
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

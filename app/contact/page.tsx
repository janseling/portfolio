"use client";

import { Mail, MessageCircle, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement contact form submission
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-400">
            Let&apos;s discuss your next project
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a
            href="https://t.me/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors duration-200 text-center group"
          >
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Telegram</h3>
            <p className="text-gray-400 text-sm">@your_username</p>
          </a>

          <a
            href="mailto:your@email.com"
            className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500 transition-colors duration-200 text-center group"
          >
            <Mail className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">your@email.com</p>
          </a>

          <a
            href="https://github.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500 transition-colors duration-200 text-center group"
          >
            <Github className="w-12 h-12 mx-auto mb-4 text-pink-400 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm">@your_username</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 bg-gray-900/50 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

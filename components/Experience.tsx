"use client";

import { useState } from "react";

interface ExperienceProps {
  isDark: boolean;
}

const experiences = [
  {
    title: "Intern",
    organization: "Caarya Innovative",
    period: "May 2026: July 2026 | Remote",
    status: "Completed",
    description:
      "BITS Pilani Practice School-I Program focused on AI applications, product development, and software engineering.",
    bullets: [
      "Built and deployed an AI-powered Root Cause Analysis (RCA) agent using React, Node.js, and LLM-based prompt engineering to automate structured Five Whys analysis with iterative user interaction.",
      "Industry mentorship on AI applications and product development as part of the BITS Pilani PS-I program.",
    ],
  },
  {
    title: "Research Intern",
    organization: "TCS-Research, DATA-LAB",
    period: "Jan 2026: Apr 2026 | Remote",
    status: "Completed",
    description:
      "Collaborated with researchers from TCS-Research through BITS Data-Lab on cutting-edge LLM research.",
    bullets: [
      "Assisted in the design, implementation, and evaluation of methodologies for analyzing and mitigating sycophantic behavior in Large Language Models.",
      "Achieved 25% improvement over contemporary sycophancy-reducing pipelines.",
      "Research paper on LLM sycophancy currently under peer review.",
    ],
  },
  {
    title: "Course Mentor",
    organization: "Center for Technical Education, BITS Pilani",
    period: "Jan 2025: Mar 2025 | Goa, India",
    status: "Completed",
    description:
      "Taught machine learning fundamentals to freshman students at BITS Pilani.",
    bullets: [
      "Conducted introductory sessions on machine learning fundamentals for a class of 60+ freshman students.",
      "Explained the mathematical foundations of probability, linear algebra, and basic machine learning concepts.",
    ],
  },
  {
    title: "Research Member",
    organization: "SAiDL",
    period: "Research",
    status: "Research",
    description:
      "Worked on reinforcement learning, deep learning, and research-oriented AI systems.",
    bullets: [
      "Implemented RL algorithms",
      "Worked on transformer-based architectures",
      "Contributed to AI research projects",
    ],
  },
  {
    title: "Research Member",
    organization: "DataLab",
    description:
      "Participated in data science and machine learning research initiatives.",
    bullets: [
      "Model development and experimentation",
      "Potential paper under review",
      "Research collaboration",
    ],
  },
];

export default function Experience({ isDark }: ExperienceProps) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % experiences.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? experiences.length - 1 : prev - 1
    );
  };

  const exp = experiences[current];

  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <p
            className={`text-sm uppercase tracking-widest font-semibold ${
              isDark ? "text-teal-400" : "text-teal-600"
            }`}
          >
            Experience
          </p>

          <h2 className="font-display text-5xl font-bold mt-3">
            Work & Research
          </h2>

          <p
            className={`mt-4 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Industry experience, research involvement, and technical contributions.
          </p>
        </div>

        <div
          className={`rounded-3xl border p-8 transition-all duration-300 ${
            isDark
              ? "bg-gradient-to-br from-teal-950/50 to-black border-teal-900"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex justify-between items-start flex-wrap gap-4">

            <div>
              <h3 className="text-3xl font-bold">
                {exp.title}
              </h3>

              <p
                className={`mt-2 text-xl font-semibold ${
                  isDark
                    ? "text-teal-400"
                    : "text-teal-600"
                }`}
              >
                {exp.organization}
              </p>

              <p className={`mt-1 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                {exp.period}
              </p>

              <span
                className={`inline-block mt-4 px-4 py-1 rounded-full text-sm ${
                  isDark
                    ? "bg-teal-900/30 text-teal-400"
                    : "bg-teal-100 text-teal-700"
                }`}
              >
                {exp.status}
              </span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-teal-600 text-white"
              >
                ←
              </button>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-teal-600 text-white"
              >
                →
              </button>
            </div>
          </div>

          <p
            className={`mt-8 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {exp.description}
          </p>

          <ul className="mt-6 space-y-4">
            {exp.bullets.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3"
              >
                <span className="text-teal-500 mt-1">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-2 mt-8">
            {experiences.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  current === idx
                    ? "bg-teal-500"
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

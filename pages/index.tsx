import React, { useEffect, useState } from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Copilot from "../components/Copilot";
import Experience from "../components/Experience";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://saatwik-ss.github.io";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(shouldBeDark);
    updateTheme(shouldBeDark);
  }, []);

  const updateTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
    updateTheme(newDark);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Portfolio site</title>
        <meta name="description" content="Portfolio of Saatwik Tiwari — B.E. Mathematics & Computing at BITS Pilani Goa. AI systems, full-stack products, LLM research, and machine learning." />
        <link rel="canonical" href={SITE_URL} />
      </Head>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} scrollToSection={scrollToSection} />
      <Copilot isDark={isDark} />
      <main id="home">
        <Hero isDark={isDark} />
      </main>

      <section id="about">
        <About isDark={isDark} />
      </section>

      <section id="experience">
        <Experience isDark={isDark} />
      </section>

      <section id="skills">
        <Skills isDark={isDark} />
      </section>

      <section id="projects">
        <Projects isDark={isDark} />
      </section>

      <section id="contact">
        <Contact isDark={isDark} />
      </section>
    </>
  );
}

export default function Resume() {
  return (
    <section id="Resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Resume
        </h2>

        <p className="mb-6 text-gray-600 dark:text-gray-400">
          View or download my resume.
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}

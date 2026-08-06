interface ContactProps {
  isDark: boolean;
}

export default function Contact({ isDark }: ContactProps) {
  const contactMethods = [
    {
      title: 'Email',
      value: 'satwiktiwari59@gmail.com',
      href: 'mailto:satwiktiwari59@gmail.com',
      icon: 'envelope',
    },
    {
      title: 'Phone',
      value: '+91 9045 330 144',
      href: 'tel:+919045330144',
      icon: 'phone',
    },
    {
      title: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/saatwik-tiwari-336b86301/',
      icon: 'linkedin',
    },
    {
      title: 'GitHub',
      value: 'View my code',
      href: 'https://github.com/Saatwik-ss',
      icon: 'github',
    },
  ];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-black border-t border-gray-800' : 'bg-white border-t border-gray-200'
    }`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className={`text-lg mb-12 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Feel free to reach out for any collaborations or opportunities. I am always open to interesting projects and opportunities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`p-6 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'bg-gray-900 hover:bg-teal-900 border border-gray-800 hover:border-teal-600'
                  : 'bg-gray-50 hover:bg-teal-50 border border-gray-200 hover:border-teal-400'
              }`}
            >
              <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {method.value}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

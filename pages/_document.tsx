import { Html, Head, Main, NextScript } from 'next/document';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://saatwik-ss.github.io';
const SITE_NAME = 'Saatwik Tiwari';
const DESCRIPTION =
  'Hey there man whats up';

export default function Document() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Saatwik Tiwari',
    url: SITE_URL,
    jobTitle: 'Student, Mathematics and Computing',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'BITS Pilani, K. K. Birla Goa Campus',
    },
    sameAs: [
      'https://github.com/Saatwik-ss',
      'https://www.linkedin.com/in/saatwik-tiwari-336b86301/',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Full-stack Development',
      'Reinforcement Learning',
      'Large Language Models',
    ],
  };

  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="application-name" content={SITE_NAME} />
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="Saatwik Tiwari, BITS Pilani, AI, Machine Learning, Full-stack, Portfolio, Crystal, OptiMover, LLM, Reinforcement Learning"
        />
        <meta name="author" content="Saatwik Tiwari" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        {/* After verifying in Google Search Console, paste the token below:
        <meta name="google-site-verification" content="YOUR_TOKEN_HERE" />
        */}
        <link rel="canonical" href={SITE_URL} />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="shortcut icon" href="/favicon-32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#14b8a6" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={`${SITE_NAME} | AI & Full-stack Portfolio`} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:image:alt" content="Saatwik Tiwari portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${SITE_NAME} | AI & Full-stack Portfolio`} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

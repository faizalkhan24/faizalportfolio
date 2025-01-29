import { metadata } from "./metadata"; // Adjust path as necessary
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </head>

      <div>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
      </div>
    </>
  );
}

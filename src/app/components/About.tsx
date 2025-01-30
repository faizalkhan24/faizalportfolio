// components/About.tsx
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-primary-light py-16 px-6 border-b border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <article className="grid md:grid-cols-12 gap-12 items-center">
          {/* Profile Image */}
          <div className="md:col-span-5 relative group">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-8 border-white bg-white">
              <Image
                src="/profile.jpg"
                alt="John Doe - Professional Full Stack Developer Specializing in React & Node.js"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                quality={90}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-7 space-y-6">
            <header>
              <h1 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                Full Stack Developer Specializing in Modern Web Technologies
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Professional Web Developer with 5+ Years of Experience Building Scalable Applications
              </p>
            </header>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                As a dedicated <strong className="text-accent">Full Stack Developer</strong> and <strong className="text-accent">Web Application Specialist</strong>, 
                I combine expertise in <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>Cloud Infrastructure</strong> 
                to deliver high-performance solutions.
              </p>

              <ul className="grid gap-3 sm:grid-cols-2 mb-8">
                {[
                  'SEO-Friendly Development',
                  'Responsive Web Design',
                  'REST API Integration',
                  'Database Optimization',
                  'Agile Methodology',
                  'CI/CD Pipelines'
                ].map((item) => (
                  <li 
                    key={item}
                    className="flex items-center bg-gray-50 p-3 rounded-lg text-gray-700 border border-gray-200"
                  >
                    <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-accent/10 p-6 rounded-lg mb-8 border border-accent/20">
                <h2 className="text-xl font-semibold text-primary-dark mb-4">Development Expertise</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Frontend Development (React/Next.js)',
                    'Backend Architecture (Node.js)',
                    'Database Management',
                    'Cloud Deployment (AWS)',
                    'Performance Optimization',
                    'Technical SEO Implementation'
                  ].map((service) => (
                    <div key={service} className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors text-center"
                aria-label="View Full Stack Developer Portfolio"
              >
                View Development Projects
              </Link>
              <Link
                href="/contact"
                className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-colors text-center"
                aria-label="Hire Full Stack Developer"
              >
                Hire Web Developer
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
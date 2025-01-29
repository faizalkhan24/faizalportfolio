import { FaGraduationCap, FaCertificate, FaTools } from 'react-icons/fa';

export const metadata = {
  title: "About Faizal Khan | Full-Stack Developer Profile",
  description: "Learn about Faizal Khan's technical expertise, professional journey, and educational background in software development.",
};

export default function About() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Bio Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">About Me</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg leading-relaxed">
                With 2+ years of hands-on experience in full-stack development, I specialize in 
                creating robust web applications using modern technologies. My expertise spans 
                from designing efficient database architectures to implementing pixel-perfect 
                UIs, always focusing on performance and scalability.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaTools className="text-secondary text-2xl" />
                <span className="font-semibold">Current Focus: MERN Stack & Cloud Integration</span>
              </div>
              {/* Add more personal details */}
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Education</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <FaGraduationCap className="text-secondary text-3xl mt-1" />
              <div>
                <h3 className="text-xl font-bold">Master of Computer Application</h3>
                <p className="text-gray-600">Mohanlal Sukhadia University | 2022-2024</p>
                <p className="mt-2">Specialized in Advanced Web Architecture and Cloud Computing</p>
              </div>
            </div>
            {/* Add other education entries */}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
              <FaCertificate className="text-secondary text-3xl" />
              <div>
                <h3 className="text-xl font-bold">Foundational C# with Microsoft</h3>
                <p className="text-gray-600">FreeCodeCamp</p>
                <p className="mt-2">Mastered core concepts of C# programming and .NET fundamentals</p>
              </div>
            </div>
            {/* Add other certifications */}
          </div>
        </section>
      </div>
    </div>
  );
}
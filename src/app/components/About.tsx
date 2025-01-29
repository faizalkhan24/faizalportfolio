import Image from "next/image";
import Link from "next/link"; // Import Link to navigate to another page

export default function About() {
  return (
    <section className="container mx-auto px-6 py-16 text-center md:text-left bg-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
          <div className="relative group">
            <Image
              src="/profile.jpg"
              alt="John Doe"
              width={250}
              height={250}
              className="rounded-full shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-full group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-2/3 text-gray-800">
          <h2 className="text-4xl font-bold mb-4 text-accent">About Me</h2>
          
          {/* Horizontal Line */}
          <div className="w-40 border-t-4 border-accent mb-6 ml-0"></div>

          <p className="text-xl text-gray-700 mb-6">
            I&apos;m a <span className="text-2xl font-bold mb-4 text-accent">Full Stack Developer</span> with
            expertise in modern web technologies and cloud solutions. Passionate
            about <span className="text-2xl font-bold mb-4 text-accent">React, Node.js,</span> and
            <span className="text-2xl font-bold mb-4 text-accent"> Tailwind CSS</span>, I love building
            scalable and user-friendly web applications.
          </p>

          <p className="text-lg text-gray-600 mb-6">
            When I&apos;m not coding, I enjoy learning new technologies, collaborating
            with fellow developers, and contributing to open-source projects.
          </p>

          {/* Button to About Us Page */}
          <Link
            href="/about" // Link to the About Us page
            className="inline-block mt-6 py-3 px-6 bg-accent text-white font-semibold text-lg rounded-lg transition-transform transform hover:bg-accent-dark hover:scale-105 hover:shadow-lg"
          >
            Learn More About Me
          </Link>
        </div>
      </div>
    </section>
  );
}

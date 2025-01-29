import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-32"
      style={{
        backgroundImage:
          "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmp3MGJ5bTZkazdrdGowMXJyaDBia2U1aDh4cnUxN3NpeDNmNjNudSZlcD12MV9pbnRlcm5naWZfYnlfaWQmY3Q9Zw/doXBzUFJRxpaUbuaqz/giphy.gif')",
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I&apos;m <span className="text-accent">Faizal khan</span>
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Full Stack Developer specializing in modern web technologies and cloud solutions.
          </p>
          <a
            href="/projects"
            className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg shadow-md hover:bg-accent-dark transition duration-300"
          >
            View My Work <FaArrowRight className="ml-3" />
          </a>
        </div>

        {/* Right Side - Profile Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
         
        </div>

      </div>
    </section>
  );
}

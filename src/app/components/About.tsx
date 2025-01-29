import Image from "next/image";

export default function About() {
  return (
    <section className="container mx-auto px-6 py-16 text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
          <Image
            src="/profile.jpg"
            alt="John Doe"
            width={250}
            height={250}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-accent">About Me</h2>
          <p className="text-lg text-gray-700">
            I'm a **Full Stack Developer** with expertise in modern web
            technologies and cloud solutions. Passionate about **React, Node.js,
            and Tailwind CSS**, I love building scalable and user-friendly web
            applications.
          </p>
        </div>
      </div>
    </section>
  );
}

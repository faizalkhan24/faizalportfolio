import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-4 text-gray-600">
          {project.github && (
            <a href={project.github} className="flex items-center hover:text-secondary">
              <FaGithub className="mr-2" /> Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} className="flex items-center hover:text-secondary">
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </a>
          )}
        </div>

        {project.challenges && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="font-semibold mb-2">Key Challenges & Solutions</h4>
            <ul className="list-disc pl-6 space-y-2">
              {project.challenges.map((item, index) => (
                <li key={index} className="text-sm text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
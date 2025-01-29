import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export const metadata = {
  title: "Projects | Faizal Khan Portfolio",
  description: "Explore Faizal Khan's software development projects using Next.js, Node.js, and modern web technologies.",
};

export default function Portfolio() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
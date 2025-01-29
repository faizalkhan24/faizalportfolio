import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-light mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: john.doe@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:text-accent">
                <FaGithub size={24} />
              </a>
              <a href="#" className="hover:text-accent">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p>Full Stack Developer specializing in modern web technologies and cloud solutions.</p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-4 text-center">
          <p>&copy; 2023 John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

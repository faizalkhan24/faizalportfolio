import ContactForm from '../../app/contact/ContactForm';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const metadata = {
  title: "Contact | Faizal Khan - Full Stack Developer",
  description: "Get in touch with Faizal Khan for web development opportunities and collaborations.",
};

export default function Contact() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
          <ContactForm />
        </div>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-secondary text-2xl" />
            <span>kfaizal307@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-secondary text-2xl" />
            <a href="#" className="hover:text-secondary">LinkedIn Profile</a>
          </div>
          <div className="flex items-center space-x-4">
            <FaGithub className="text-secondary text-2xl" />
            <a href="#" className="hover:text-secondary">GitHub Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
}
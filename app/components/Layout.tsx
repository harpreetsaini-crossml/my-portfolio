import Link from 'next/link';
import { Briefcase, Heart, User, Phone, Mail } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-4 md:p-8 lg:p-12"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="bg-white bg-opacity-80 max-w-6xl mx-auto relative p-6 rounded-lg shadow-md">
        <nav className="mb-6">
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-800 flex items-center gap-1">
                <User size={20} />
                About
              </Link>
            </li>
            <li>
              <Link href="/skills" className="text-gray-600 hover:text-gray-800 flex items-center gap-1">
                <Briefcase size={20} />
                Skills
              </Link>
            </li>
            <li>
              <Link href="/hobbies" className="text-gray-600 hover:text-gray-800 flex items-center gap-1">
                <Heart size={20} />
                Hobbies
              </Link>
            </li>
            <li>
              <Link href="/connect" className="text-gray-600 hover:text-gray-800 flex items-center gap-1">
                <Phone size={20} />
                Connect
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800 flex items-center gap-1">
                <Mail size={20} />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-serif italic text-gray-800 text-center mb-8">
            Harpreet Singh
          </h1>
          <div className="absolute -bottom-4 left-0 right-0">
            <svg
              className="w-full h-8"
              viewBox="0 0 400 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10 H400"
                stroke="gray"  
                strokeWidth="1"
                className="text-gray-300"
              />
              <circle cx="200" cy="10" r="4" fill="#C45500" />
            </svg>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
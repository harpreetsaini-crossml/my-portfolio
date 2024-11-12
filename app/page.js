import Image from "next/image";
import { Code, Briefcase, Heart } from "lucide-react";

export default function Component() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-4 md:p-8 lg:p-12"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="bg-white bg-opacity-80 max-w-6xl mx-auto relative p-6 rounded-lg shadow-md">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-serif italic text-gray-800">
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
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-gray-300"
                  />
                  <circle cx="200" cy="10" r="4" fill="#C45500" />
                </svg>
              </div>
            </div>
            <div className="space-y-4 text-gray-600 max-w-xl">
              <p className="text-lg italic font-semibold flex items-center gap-2">
                <Code size={20} /> About Me
              </p>
              <p className="text-base">
                Hello! I'm a passionate Python and Django web developer based in Punjab, India. With a Bachelor's degree in Computer Science, I'm on an exciting journey to create impactful web applications that solve real-world problems.
              </p>
              <p className="text-base">
                My fascination with coding started during my college years, and since then, I've been constantly learning and improving my skills. I love the challenge of turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p className="text-lg italic font-semibold mt-6 flex items-center gap-2">
                <Briefcase size={20} /> Skills & Expertise
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Python & Django: Building robust backend systems</li>
                <li>RESTful APIs: Creating efficient data exchange interfaces</li>
                <li>Frontend Technologies: Familiar with React</li>
                <li>Version Control: Git and GitHub for collaborative development</li>
              </ul>
              <p className="text-lg italic font-semibold mt-6 flex items-center gap-2">
                <Heart size={20} /> Hobbies & Interests
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Drawing: Passionate about sketching and art</li>
                <li>Nature lover: Enjoy hiking and exploring natural landscapes</li>
                <li>Travelling: Enthusiastic about discovering new cultures and places</li>
                <li>Photography: Capturing moments and scenes during travels</li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full aspect-[4/5] bg-white p-3 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/profile.jpg?height=600&width=480"
                alt="Profile Image of Harpreet Singh"
                width={480}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-white -z-10 transform -rotate-2"></div>
            <div className="absolute bottom-4 right-4 bg-white p-4 shadow-md rounded-lg">
              <p className="text-sm font-semibold text-gray-800">Let's Connect!</p>
              <div className="mt-2 space-y-1">
                <a href="mailto:harpreet@example.com" className="text-blue-600 hover:underline block">harpreet.singh@crossml.com</a>
                <a href="https://www.linkedin.com/in/harpreet-singh-saini-24a4a6296/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

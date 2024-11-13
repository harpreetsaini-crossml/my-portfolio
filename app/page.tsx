import Layout from './components/Layout';
import ProfileImage from './components/ProfileImage';
import ConnectCard from './components/ConnectCard';
import { Code } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-gray-600 max-w-xl">
          <p className="text-lg italic font-semibold flex items-center gap-2">
            <Code size={25} color="magenta"/> About Me
          </p>
          <p className="text-base">
            Hello! I&apos;m a passionate Python and Django web developer based in Punjab, India. With a Bachelor&apos;s degree in Computer Science, I&apos;m on an exciting journey to create impactful web applications that solve real-world problems.
          </p>
          <p className="text-base">
            My fascination with coding started during my college years, and since then, I&apos;ve been constantly learning and improving my skills. I love the challenge of turning complex problems into simple, beautiful, and intuitive designs.
          </p>
        </div>
        <div className="relative">
          <ProfileImage />
          <div className="absolute bottom-4 right-4">
            <ConnectCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}
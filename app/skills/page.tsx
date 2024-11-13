import Layout from '../components/Layout';
import { Briefcase } from 'lucide-react';

export default function Skills() {
  return (
    <Layout>
      <div className="space-y-4 text-gray-600 max-w-xl mx-auto">
        <p className="text-lg italic font-semibold flex items-center gap-2">
          <Briefcase size={25} color="blue"/> Skills & Expertise
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Python & Django: Building robust backend systems</li>
          <li>RESTful APIs: Creating efficient data exchange interfaces</li>
          <li>Frontend Technologies: Familiar with React</li>
          <li>Version Control: Git and GitHub for collaborative development</li>
        </ul>
      </div>
    </Layout>
  );
}
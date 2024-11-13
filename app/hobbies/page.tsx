import Layout from '../components/Layout';
import { Heart } from 'lucide-react';

export default function Hobbies() {
  return (
    <Layout>
      <div className="space-y-4 text-gray-600 max-w-xl mx-auto">
        <p className="text-lg italic font-semibold flex items-center gap-2">
          <Heart size={25} color="red"/> Hobbies & Interests
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Drawing: Passionate about sketching and art</li>
          <li>Nature lover: Enjoy hiking and exploring natural landscapes</li>
          <li>Travelling: Enthusiastic about discovering new cultures and places</li>
          <li>Photography: Capturing moments and scenes during travels</li>
        </ul>
      </div>
    </Layout>
  );
}
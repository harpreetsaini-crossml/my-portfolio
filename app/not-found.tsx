import Layout from './components/Layout';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Layout>
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="text-blue-600 hover:underline">
          Go back to the homepage
        </Link>
      </div>
    </Layout>
  );
}
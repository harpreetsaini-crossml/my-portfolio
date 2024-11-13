import Layout from '../components/Layout';
import ConnectCard from '../components/ConnectCard';

export default function Connect() {
  return (
    <Layout>
      <div className="flex justify-center items-center h-64">
        <ConnectCard />
      </div>
    </Layout>
  );
}
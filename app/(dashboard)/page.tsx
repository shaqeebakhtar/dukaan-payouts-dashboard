import Overview from './_components/overview';
import Transactions from './_components/transactions';

const Home = () => {
  return (
    <div className="space-y-8">
      <Overview />
      <Transactions />
    </div>
  );
};

export default Home;

import Layout from '../../../components/Layout/Layout';
import analyticsImage from '../../../assets/images/analytics.jpg';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Analytics: React.FC = () => {
  return (
    <Layout>
      <div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src={analyticsImage} alt="" className="w-[65%] mx-auto" />
          </div>
          <div className="mb-8">
            <div className="text-center font-medium max-w-[70ch] md:mx-auto pr-4 md:pr-0 ml-4 md:ml-auto md:text-center">

              <Link to="/dashboard" className="text-primary">
                {' '}
                Back to your Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;

import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../components/Layout/Layout';
import settingsImage from '../../../assets/images/settings.jpg';
import Lottie from "lottie-react"
import animationData from '../../../components/animate/settings.json'

const Settings: React.FC = () => {
  return (
    <Layout>
      <div>
        <div className="flex flex-col justify-center items-center">
          <div>
            {/* <img src={settingsImage} alt="" className="w-[80%] mx-auto" /> */}
            <Lottie animationData={animationData} className=' mx-auto'/>
          </div>
          {/* <div className="text-2xl md:text-4xl max-w-[28ch] text-center mx-4 mb-4 md:mb-4 md:text-[40px] font-bold">
              Update Your Account: Personalize Preferences and Elevate Your Usage.
          </div> */}
          <div className="mb-8">
            <div className="w-[90%] text-center font-medium max-w-[70ch] md:mx-auto pr-4 md:pr-0 ml-4 md:ml-auto md:text-center">
              Our team is diligently working to implement this feature. In the meantime, feel free to
              <Link to="/dashboard" className="text-primary">
                {' '}
                Return to your Dashboard
              </Link>{' '}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;

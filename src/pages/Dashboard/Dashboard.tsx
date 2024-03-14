import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import dashboardImage from '../../assets/images/dashboard.jpg';
import { notify } from '../../App';
import { useAuth } from '../../contexts/UserContext/UserContext';
import { CircleLoader } from '../../components';
// import Lottie from "lottie-react"
// import aanimatonData from '../../components/animate/loading.json'
import { useTypewriter } from 'react-simple-typewriter';

const Dashboard: React.FC = () => {
  const { user, setAuthenticatedUser } = useAuth();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  interface User {
    name: string;
  }

  const [text] = useTypewriter({
    words: ["Welcome, what will you like for us to do for you today😉"],
    typeSpeed: 40,
    delaySpeed: 3000,
  })
  

  const getCurrentUser = async () => {
    try {
      const response = await fetch(
        'https://cutly.onrender.com/api/v1/users/me',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      if (response.ok) {
        const userData = await response.json();
        if (userData === null) {
          notify('Unable to fetch your details, please login and try again!');
          setLoading(false);
        }
        setCurrentUser(userData);
        setAuthenticatedUser(userData);
      } else {
        console.log('Failed to fetch currently logged-in user');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('Failed to fetch currently logged-in user:', error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <Layout>
      {loading ? (
        <div className="bg-gray-200 h-full md:h-[calc(100vh_-_60px)] overflow-y-auto">
          <div className="flex mt-8 h-[50vh] bg-white m-10 rounded-lg justify-center items-center">
            <CircleLoader color="#005AE2" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="mt-8 mb-4 font-semibold text-2xl text-center mx-8">
            {text}
          </div>
          <div>
            <img src={dashboardImage} alt="" className="mx-auto w-[60%]" />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;

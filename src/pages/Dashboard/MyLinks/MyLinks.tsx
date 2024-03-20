import React, { useContext } from 'react';
import Layout from '../../../components/Layout/Layout';
import { UserContext } from '../../../contexts/UserContext/UserContext';

const MyLinks: React.FC = () => {
  const { trimmedUrls } = useContext(UserContext);

  return (
    <Layout>
      <div className='h-full md:h-[calc(100vh_-_60px)] overflow-y-auto'>
        <div className="flex flex-col w-full justify-center items-center">
          <h1 className="text-2xl font-bold mb-4 mt-8 text-primary font-kanit">Available Links Below</h1>
          <ul className="w-[95%] max-w-[70ch] md:mx-auto">
            {trimmedUrls.map(({ trimmedUrl, longUrl }, index) => (
              <li key={index} className="border border-blue-200 bg-blue-200 bg-opacity-25 rounded-md mb-4 p-4 ">
                <p className="mb-2">
                  <span className="font-semibold text-lg">Long URL:</span>{" "}
                  <a href={longUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-light text-sm font-kanit hover:underline block max-w-[70ch] break-words">{longUrl}</a>
                </p>
                <p className="mt-2">
                  <span className="font-semibold text-lg">Trimmed URL:</span>{" "}
                  <a href={trimmedUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-thin text-sm font-kanit hover:underline block max-w-[70ch] break-words">{trimmedUrl}</a>
                </p>   
              </li>
            ))}
          </ul>
        </div>      
      </div>
    </Layout>
  );
};

export default MyLinks;

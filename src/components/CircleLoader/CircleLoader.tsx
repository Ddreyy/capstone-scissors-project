import React from 'react';
import { Hearts } from 'react-loader-spinner';

interface LoaderProps {
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({ color = '#000000' }) => {
  return (
    <div className="flex h-fit justify-center items-center">
      <Hearts
        height={200}
        width={200}
        color={color}
        visible={true}
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};

export default Loader;

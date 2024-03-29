import React from 'react';

const ImageWithOverlay = ({ imageUrl, overlayText }) => {
 return (
    <div className="relative">
      <img src={imageUrl} alt="Background" className=" w-[287px] h-64 object-contain" />
      <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
        <p className="text-black md:text-2xl">{overlayText}</p>
      </div>
    </div>
 );
};

export default ImageWithOverlay;

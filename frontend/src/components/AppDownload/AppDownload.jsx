import React from "react";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download my-20" id="app-download">
      <div className="text-center font-medium m-auto">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bond capitalize leading-relaxed">
          for better experience download <span className="block mt-3">Tomato App</span>
        </p>

        <div className="flex flex-col items-center xs:flex-row justify-center gap-7 mt-8">
          <img
            src={assets.play_store}
            alt="play store"
            className="max-w-[180px] w-full hover:scale-105 transition-all cursor-pointer"
          />
          <img
            src={assets.app_store}
            alt="app store"
            className="max-w-[180px] w-full hover:scale-105 transition-all cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;

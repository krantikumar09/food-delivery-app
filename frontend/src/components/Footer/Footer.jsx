import React from "react";

const Footer = () => {
  return (
    <div className="footer pt-10 pb-4 bg-gray-300" id="footer">
      <div className="container mx-auto px-3">
        <footer className="flex flex-col sm:flex-row items-start justify-between w-full gap-10">
          <div>
            <a
              href="/"
              className="logo text-3xl xs:text-3xl sm:text-2xl md:text-3xl font-bold text-tomato mb-5"
            >
              The Kitchn<span className="text-black">.</span>
            </a>

            <p className="text-sm text-para-color">Taste like mother's hand</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-16">
            <div className="md:justify-self-end">
              <h6 className="text-lg font-medium mb-3">COMPANY</h6>
              <div className="flex flex-col gap-4">
                <a className="text-sm text-para-color hover:underline cursor-pointer">
                  Home
                </a>
                <a className="text-sm text-para-color hover:underline cursor-pointer">
                  About us
                </a>
                <a className="text-sm text-para-color hover:underline cursor-pointer">
                  Delivery
                </a>
                <a className="text-sm text-para-color hover:underline cursor-pointer">
                  Privacy policy
                </a>
              </div>
            </div>

            <div className="md:justify-self-end">
              <h6 className="text-lg font-medium mb-3">GET IN TOUCH</h6>
              <div className="flex flex-col gap-4">
                <a className="text-sm text-para-color hover:underline cursor-pointer">
                  +1-151-656-6555
                </a>
                <a className="text-sm text-para-color hover:underline cursor-pointer">
                  contact@thekitchn.com
                </a>
              </div>
            </div>
          </div>
        </footer>
        {/* copyright */}

        <p className="text-center w-full mt-10 text-para-color">
          Copyright 2024 &copy; The Kitch. - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

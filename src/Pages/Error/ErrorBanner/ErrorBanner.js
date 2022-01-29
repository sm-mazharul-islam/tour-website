import React from "react";
import "./../../Shared/BannerStyle/Banner.css";

const ErrorBanner = () => {
  return (
    <div className="Banner">
      <div className="AboutBanner py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 my-5 py-5">
              <h1 className="text-light topFont color-pink fontComfortaa">
                404 ERROR
              </h1>
            </div>
            <div className="col-lg-9"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorBanner;

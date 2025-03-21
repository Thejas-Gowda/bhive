import SpaceReview from "../components/SpaceReview";
import Amenities from "../components/Amenities";
import Hero from "../components/Hero";
import React from "react";
import AppDownloadSection from "../components/AppDownload";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <div className="mt-4">
        <Amenities />
      </div>
      <div className="mt-4">
        <SpaceReview />
      </div>
      <div className="mt-4">
    <AppDownloadSection/>
      </div>
    </>
  );
};

export default LandingPage;

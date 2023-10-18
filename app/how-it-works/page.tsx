import React from "react";

const HowItWorks = () => {
  return (
    <div className="pb-28 min-h-[80vh] max-w-[80vw] lg:max-w-[50vw] mx-auto pt-20 space-y-5">
      <h1 className="text-2xl md:text-4xl font-semibold text-[#015E5F]">
        How it Works
      </h1>
      <h2 className="text-xl">
        Patop is a personal project I created due to lack of available sources
        of funding for student projects in my school. It enables students to
        talk about their academic projects with the general public to gain
        financial support from potential interested donors.
        <div className="py-[2px]"></div> <br /> Please note that this is not a
        commercial project and any donations you make will be sent to me,
        although you can make them as a support.{" "}
        <div className="py-[2px]"></div> <br />
        As a student you can create an account and sign in to create a campaign
        for your project. Navigate to the raise funds page and fill in the form
        there with your project details. <div className="py-[2px]"></div> <br />
        For anyone intrested in backing up a student project, click on view
        project, check out the project description and if it intrestes you make
        a donation.
      </h2>
    </div>
  );
};

export default HowItWorks;

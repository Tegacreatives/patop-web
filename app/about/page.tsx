import React from "react";

const About = () => {
  return (
    <div className="pb-28 min-h-[80vh] max-w-[80vw] lg:max-w-[50vw] mx-auto pt-20 space-y-5">
      <h1 className="text-2xl md:text-4xl font-semibold text-[#015E5F]">
        About Patop
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
        If I see any interest in the project, then I will plan towards making it
        a commercial project
      </h2>
    </div>
  );
};

export default About;

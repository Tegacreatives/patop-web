import React from "react";

const Hero = () => {
  return (
    <section className="h-[40vh] bg-cover bg-no-repeat bg-center bg-bg-2">
      <div className="w-full h-full bg-black/70 p-8 md:p-14">
        <div className=" w-[70vw] md:w-[42vw] space-y-3 md:space-y-5 text-white md:py-8">
          <h1 className="font-bold text-2xl md:text-4xl">
            Invest In the future of a student
          </h1>
          <p className="text-sm lg:text-base">
            Be a catalyst for the future of the next generation by contributing
            to their innovative projects with Patop. Your support empowers the
            students of today to shape our tomorrow. Join us in nurturing their
            creativity and vision, and together, let&apos;s fuel a brighter and
            more innovative future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

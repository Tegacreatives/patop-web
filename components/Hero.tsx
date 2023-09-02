import React from "react";

const Hero = () => {
  return (
    <section className="h-[40vh] md:h-[40vh] bg-cover bg-no-repeat bg-center bg-bg-2">
      <div className="w-full h-full bg-black/70 p-8 md:p-14">
        <div className=" w-[70vw] md:w-[40vw] space-y-3 md:space-y-5 text-white pt-7 md:pt-14">
          <h1 className="font-bold text-2xl md:text-4xl">
            Invest In the future of a student
          </h1>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            tempore deleniti, distinctio culpa odit, ex quo accusantium unde
            voluptatem quibusdam sint fugiat praesentium? At odit illum dicta
            sapiente corrupti debitis? Mollitia vero doloribus laborum ab nam
            dolore repellendus beatae provident?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

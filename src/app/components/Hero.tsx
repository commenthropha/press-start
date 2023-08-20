import React from "react";
import styles from "./styles/Hero.module.css";

const Hero = () => {
  return (
    <div
      id="hero"
      className={`min-h-[800px] md:min-h-[900px] xl:min-h-[1000px] ${styles.main}`}
    >
      <div className="pl-[50px] sm:pl-[100px] pt-[150px] md:pt-[200px] md:pl-[150px] lg:pt-[225px] lg:pl-[200px] xl:pl-[300px]">
        <h1
          className={`font-extrabold text-5xl sm:text-6xl md:text-7xl xl:text-8xl ${styles.shadow}`}
        >
          Your Games,
          <br /> Reviewed
        </h1>
      </div>
      <div className="text-slate-500 italic text-center text-bottom pt-72 xl:pt-[22rem] mx-12">
        Taken from Red Dead Redemption 2
      </div>
    </div>
  );
};

export default Hero;

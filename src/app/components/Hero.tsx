import React from "react";
import styles from "./styles/Hero.module.css";

/*
 * Hero to be displayed on the index page
 */
const Hero = () => {
  return (
    <div>
      <div
        id="hero"
        className={`min-h-[600px] md:min-h-[900px] ${styles.main}`}
      >
        <div className="pl-[50px] sm:pl-[100px] pt-[150px] md:pl-[150px] lg:pl-[200px] xl:pl-[300px]">
          <h1
            className={`font-extrabold text-5xl sm:text-6xl md:text-7xl xl:text-8xl`}
          >
            Your Favourite Games,
            <br /> Reviewed
          </h1>
        </div>
      </div>
      <p className="italic tracking-tighter font-inconsolata text-red-900 text-center text-bottom mt-4 mx-12 text-xs md:text-sm">
        Red Dead Redemption 2
      </p>
    </div>
  );
};

export default Hero;

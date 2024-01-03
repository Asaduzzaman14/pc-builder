import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const HandleScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when scrolling down, hide when at the top
      setIsVisible(window.scrollY > 100);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className='relative'>
      <button
        className={`scroll-to-top-button ${isVisible ? "visible" : "hidden"}`}
        onClick={scrollToTop}
      >
        <BsArrowUp />
      </button>
    </div>
  );
};

export default HandleScroll;

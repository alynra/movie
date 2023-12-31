"use client";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import slider from "@/assets/slider.png";
import Image from "next/image";

const Carousel = () => {
  useEffect(() => {
    // on mount setup event listeners and flowbite data attributes
    initFlowbite();
  }, []);
  // this is not fully implemented due to lack of time, its just a placeholder for now
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="md:h-96 relative h-56 overflow-hidden rounded-lg">
        <div className="duration-700 ease-in-out" data-carousel-item>
          <Image
            src={slider}
            alt="slider"
            className="top-1/2 left-1/2 absolute block w-full -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            src={slider}
            alt="slider"
            className="top-1/2 left-1/2 absolute block w-full -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            src={slider}
            alt="slider"
            className="top-1/2 left-1/2 absolute block w-full -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            src={slider}
            alt="slider"
            className="top-1/2 left-1/2 absolute block w-full -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            src={slider}
            alt="slider"
            className="top-1/2 left-1/2 absolute block w-full -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      <div className="bottom-5 left-1/2 absolute z-30 flex space-x-3 -translate-x-1/2">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      <button
        type="button"
        className="group focus:outline-none absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        data-carousel-prev
      >
        <span className="bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none inline-flex items-center justify-center w-10 h-10 rounded-full">
          <svg
            className="dark:text-gray-800 w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="group focus:outline-none absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        data-carousel-next
      >
        <span className="bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none inline-flex items-center justify-center w-10 h-10 rounded-full">
          <svg
            className="dark:text-gray-800 w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
export default Carousel;

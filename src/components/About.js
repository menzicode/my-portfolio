import React from "react";
export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Matt.
              <br className="hidden lg:inline-block" />I love to do build apps and do fun ML projects.
            </h1>
            <p className="mb-8 leading-relaxed">
            I am a graduate of Northeastern University's Khoury College of Computer Science, where I earned a MS in CS, and Colby College, where I earned a BA in Philosophy with a minor in Economics. 

My graduate school experience was focused largely on AI and machine learning, where I worked on research for things like color constancy in images and building new kinds of GANs. I stay up-to-date with the latest developments in AI/ML (like applying transformers to all kinds of problems).

During graduate school I worked as a Software Engineer for Tilson, a telecommunications firm. My role at Tilson involved developing custom software for various business units as well as architecting and deploying systems to the cloud as the company transitioned to Microsoft Azure. 

My primary programming languages are Python, Java, and C++. I am experienced with cloud computing, AI/ML systems, DevOps, mobile app development, distributed systems, and many facets of computer vision.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./coding.svg"
            />
          </div>
        </div>
      </section>
    );
  }

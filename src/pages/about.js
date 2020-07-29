import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";

import SEO from "../components/seo";
import spacexLogo from "../images/spacex-logo.png";
import elon from "../images/elon-png.png";

function AboutPage() {
  const info = useStaticQuery(graphql`
    query CompanyInfo {
      spacex {
        company {
          founder
          headquarters {
            city
            state
          }
          summary
          name
          employees
        }
      }
    }
  `);

  const data = info.spacex.company;

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      {/* summary */}
      <section className="flex flex-col items-center md:flex-row bg-black text-white p-12 pt-20 lg:pt-32">
        <div className="md:w-2/3 md:mr-10 lg:mr-40">
          <blockquote className="pl-4 leading-loose text-left border-l-4 border-white">
            {data.summary}
          </blockquote>
        </div>

        <figure className="w-2/3 md:w-1/3 m-8">
          <img alt="spaceX" src={spacexLogo} />
        </figure>
      </section>
      <div className="relative">
        <svg
          className="absolute z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path fill="#212121" d="M0 32l1440 64V0H0z" />
        </svg>
        <svg
          className="absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path fill="#323232" d="M0 160l1440-96V0H0z" />
        </svg>
      </div>
      {/* more info */}
      <section className="flex flex-col items-center overflow-auto scrolling-touch text-center md:flex-row text-black mx-8 mt-20 lg:mt-48 lg:mx-16 mb-8 lg:mb-12">
        <div className="md:w-1/3 my-6">
          <img className="" alt="elon musk" src={elon} />
          <p className="text-lg my-4">Founder:</p>
          <p className="text-2xl  ">{data.founder}</p>
        </div>

        <div className="md:w-1/3 lg:mx-8 my-6">
          <h3 className="font-bold text-5xl">{data.employees}</h3>
          <p className="text-2xl ">Employees</p>
        </div>

        <div className="w-2/3 md:w-1/3  max-w-xs w-24 h-24 text-center my-6 lg:mx-8">
          <svg
            height="100%"
            width="100%"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m78.777 37.021a14.777 14.777 0 1 0 -14.777 14.779 14.795 14.795 0 0 0 14.777-14.779zm-26.054 0a11.277 11.277 0 1 1 11.277 11.279 11.29 11.29 0 0 1 -11.277-11.279z" />
              <path d="m123.328 121.069-14.266-37.4a1.751 1.751 0 0 0 -1.635-1.126h-27c.165-.269.329-.53.494-.8 10.389-17.2 15.617-32.246 15.542-44.714a32.464 32.464 0 0 0 -64.928-.011c-.075 12.479 5.153 27.527 15.542 44.725.165.273.329.534.494.8h-27a1.751 1.751 0 0 0 -1.635 1.126l-14.264 37.4a1.748 1.748 0 0 0 1.635 2.374h115.386a1.748 1.748 0 0 0 1.635-2.374zm-88.292-84.048a28.964 28.964 0 1 1 57.928.01c.15 24.858-23.09 55.517-28.964 62.869-5.874-7.349-29.115-38-28.964-62.879zm27.631 66.779a1.75 1.75 0 0 0 2.666 0 185.716 185.716 0 0 0 12.9-17.759h27.987l2.24 5.875-54.691 19.451-19.494-25.329h15.49a185.716 185.716 0 0 0 12.902 17.762zm-8.959 11.3h.01l32.627-11.6 12.655 16.443h-58.9zm-31.93-29.062h8.08l20.442 26.562-20.643 7.342h-20.81zm81.643 33.905-13.609-17.682 19.9-7.077 9.443 24.759z" />
            </g>
          </svg>
          <p className="text-lg my-4">Headquarters:</p>
          <p className="text-2xl  ">{data.headquarters.city},</p>
          <p className="text-2xl  ">{data.headquarters.state}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage;

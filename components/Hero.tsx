"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import ghhg from "./public/hero.png";
import { AiOutlineBell, AiOutlineLogin, AiOutlineMessage, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import './Index.css';
const Hero = () => {
  const handleScroll = () => {
    console.log("cliclked");
  };
  const navigationItems = [
    {
      label: "Dashboard",
      icon: <AiOutlineLogin />,
      classes: "px-10 border-orange-500 rounded-lg py-1.5",
    },
    {
      label: "Profile",
      icon: <AiOutlineUser />,
      classes: "px-10 border-blue-500 rounded-lg py-1.5",
    },
    {
      label: "Settings",
      icon: <AiOutlineSetting />,
      classes: "px-10 border-green-500 rounded-lg py-1.5",
    },
    {
      label: "Messages",
      icon: <AiOutlineMessage />,
      classes: "px-10 border-purple-500 rounded-lg py-1.5",
    },
    {
      label: "Notifications",
      icon: <AiOutlineBell />,
      classes: "px-10 border-red-500 rounded-lg py-1.5",
    },
    {
      label: "Dashboard",
      icon: <AiOutlineLogin />,
      classes: "px-10 border-orange-500 rounded-lg py-1.5",
    },
    {
      label: "Dashboard",
      icon: <AiOutlineLogin />,
      classes: "px-10 border-orange-500 rounded-lg py-1.5",
    },
    {
      label: "Dashboard",
      icon: <AiOutlineLogin />,
      classes: "px-10 border-orange-500 rounded-lg py-1.5",
    },
  ];
  
  // You now have an array of five navigation items that you can use in your component.
  
  return (
    <>
      <header>
        <nav
          className="flex-no-wrap relative flex w-full items-center justify-between bg-red-100 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
          data-te-navbar-ref
        >
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <button
              className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContent1"
              aria-controls="navbarSupportedContent1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>

            <div
              className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContent1"
              data-te-collapse-item
            >
              <a
                className="mb-4 mr-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                href="#"
              >
                <Image
                  src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                  // style="height: 15px"
                  alt=""
                  width={25}
                  height={15}
                  loading="lazy"
                />
              </a>
              <ul
                className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                data-te-navbar-nav-ref
              >
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <a
                    className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                    href="#"
                    data-te-nav-link-ref
                  >
                    Dashboard
                  </a>
                </li>
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <a
                    className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="#"
                    data-te-nav-link-ref
                  >
                    Team
                  </a>
                </li>
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <a
                    className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="#"
                    data-te-nav-link-ref
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div className="relative flex items-center">
              <a
                className="mr-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#"
              >
                <span className="[&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                </span>
              </a>

              <div className="relative" data-te-dropdown-ref>
                <a
                  className="hidden-arrow mr-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  id="dropdownMenuButton1"
                  role="button"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                >
                  <span className="[&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="absolute -mt-2.5 ml-2 rounded-[0.37rem] bg-danger px-[0.45em] py-[0.2em] text-[0.6rem] leading-none text-white">
                    1
                  </span>
                </a>
                <ul
                  className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton1"
                  data-te-dropdown-menu-ref
                >
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>

              <div className="relative" data-te-dropdown-ref>
                <a
                  className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                  href="#"
                  id="dropdownMenuButton2"
                  role="button"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                >
                  <Image
                    src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                    className="rounded-full"
                    // style="height: 25px; width: 25px"
                    alt=""
                    width={25}
                    height={25}
                    loading="lazy"
                  />
                </a>
                <ul
                  className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton2"
                  data-te-dropdown-menu-ref
                >
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="flex flex-row ">
        <div className="flex   h-[93vh] w-[15%] sidebar">
          <div className="py-2">
            <ul className="">
              {navigationItems.map((el)=>{
                return(
                  <div className="  border-orange-500 rounded-lg  py-1.5">
                  {" "}
  
                  <span className=" font-normal  flex  items-center">
                    <i className="pe-4 itemIsebar">
                     {el.icon}
                    </i>
                    <p className="sideLabel">
                   {el.label}</p>
                  </span>
                </div>
                )
              })}
             
            </ul>
          </div>
        </div>

        <div className="flex bg-green-100 text-center  justify-center items-center  w-[85%] conttent ">
          <div className="bg-blue-50 max-h-full max-w-full border rounded-lg shadow-lg p-5">
            <div className="flex flex-row ">
              <i className="text-4xl text-secondary-orange">
                {" "}
                <AiOutlineLogin />
              </i>
              <span className="text-2xl font-bold font-serif pl-2 text-secondary-orange">
                Login
              </span>
            </div>
            <p className="text-lg py-1">
              This is login page please add passowrd and name{" "}
            </p>
            <div className="flex flex-col justify-start text-left pb-3 pt-2">
              <label className="text-lg ">Email</label>
              <input className="px-0.5 py-0.5 bg-gray-200 border focus:bg-gray-100 border-b-orange-500 rounded-lg outline-none" />
            </div>
            <div className="flex flex-col justify-start text-left pb-3">
              <label className="text-lg ">Email</label>
              <input className=" py-0.5 bg-gray-200 border border-b-orange-500 rounded-lg outline-none" />
            </div>

            <button className="px-9 py-1 text-lg shadow-md rounded-full mt-2 font-bold hover:bg-orange-200 bg-orange-300">
              Login
            </button>
          </div>
        </div>
        
      </div>
      
    </>
  );
};
export default Hero;
{
  /* <div className="flex-1 pt-36 padding-x">
<h1 className="hero__title">
  {" "}
  Find, book, or rent a car -- quickly and easily
</h1>
<p className="hero__subtitle">
  Streamline your car rental experience with our effortless booking
  process
</p>
<CustomButton
  title="Explor more"
  handleClick={handleScroll}
  containerStyles={"mt-10 rounded-full bg-primary-blue text-white "}
/>
</div>
<div className="hero__image-container">
<div className="hero__image">
  <Image src={ghhg} alt="image" fill className="object-contain" />
  <div className="hero__image-overlay"  />
</div>
</div> */
}

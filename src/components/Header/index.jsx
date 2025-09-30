"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Work");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Explore AI", href: "/explore-ai" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Solutions", href: "/solutions" },
    { name: "Industry", href: "/industry", hasDropdown: true },
    { name: "Hire Developers", href: "/hire-developers" },
    { name: "About Us", href: "/about-us" },
  ];

  const handleNavClick = (name) => {
    setActiveTab(name);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full h-auto bg-white shadow-lg sticky top-0 z-50">
      <div className="px-3 sm:px-3 md:px-6 lg:px-8 xl:px-9">
        <div className="flex items-center justify-between h-16 md:h-19">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/assets/svg/WmtLogo.svg"
                alt="WebMob Technologies"
                width={160}
                height={40}
                className="h-7 md:h-9 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Right Section: Navigation + Contact Us */}
          <div className="hidden lg:flex items-center flex-nowrap">
            <nav className="flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.name)}
                    className={`
                      relative flex items-center px-1 py-2 text-sm xl:text-base font-medium transition-colors duration-200 whitespace-nowrap
                      ${
                        activeTab === item.name
                          ? "text-primary"
                          : "text-text-secondary hover:text-primary"
                      }
                    `}
                  >
                    {item.name}

                    {item.hasDropdown && (
                      <Image
                        src="/assets/svg/Union.svg"
                        alt=""
                        width={12}
                        height={12}
                        className="ml-1 w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-200 group-hover:rotate-180 arrow-animate"
                      />
                    )}
                  </Link>

                  {/* Active underline */}
                  {activeTab === item.name && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full animate-fade-in"></div>
                  )}
                </div>
              ))}
            </nav>

            {/* Divider */}
            <div className="h-8 w-0.5 bg-text-disabled mx-6 xl:mx-8"></div>

            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#2a9fff] to-[#2c23e8] text-white px-6 xl:px-8 py-2.5 xl:py-3 rounded-full text-sm xl:text-base whitespace-nowrap hover:from-[#1e8be6] hover:to-[#1f1bc4] transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-text-secondary hover:text-primary hover:bg-light-bg transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            {/* Backdrop */}
            <div
              className={`fixed  inset-0  bg-opacity-50 z-40 transition-opacity duration-300`}
              onClick={() => setMobileMenuOpen(false)}
            ></div>

            {/* Menu Panel - positioned below header */}
            <div
              className={`
              fixed top-16 right-0 bottom-0 w-full bg-white  z-50
              transform transition-transform duration-300 ease-in-out
              ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
            `}
            >
              {/* Close Button */}
              {/* <div className="flex justify-end p-4 border-b border-gray-200 bg-white">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div> */}

              {/* Menu Items - Scrollable */}
              <div className="py-3 space-y-0.5 px-4 overflow-y-auto h-full pb-20">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.name)}
                    className={`
                      flex items-center justify-between px-4 py-3 text-base font-medium rounded-3xl transition-all duration-200 
                      ${
                        activeTab === item.name
                          ? "text-primary bg-light-bg border-primary shadow-sm"
                          : "text-text-secondary hover:text-primary hover:bg-light-bg"
                      }
                    `}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <Image
                        src="/assets/svg/Union.svg"
                        alt=""
                        width={12}
                        height={12}
                        className="w-4 h-4 arrow-animate"
                      />
                    )}
                  </Link>
                ))}

                {/* Separator before Contact button */}
                <div className="mx-4 my-3 h-px bg-text-disabled"></div>

                {/* Mobile Contact Button */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="block w-full btn-style501 text-center py-3.5 rounded-3xl font-semibold shadow-lg transition-all duration-200 transform active:scale-95"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

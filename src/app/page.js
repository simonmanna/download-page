// src/app/page.js
"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function DownloadPage() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 2000);

    const link = document.createElement("a");
    link.href = "/app-download/afropark-eats.apk";
    link.download = "afropark-eats.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-gradient-to-r from-[#25AAE2] to-blue-600 text-white fixed top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logo.png" // Add your logo in public/images/logo.png
              alt="Afropark Eats Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold tracking-tight">AFROPARK EATS</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-200 transition-colors"
            >
              About
            </Link>
            <Link
              href="/menu"
              className="hover:text-blue-200 transition-colors"
            >
              Menu
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-200 transition-colors"
            >
              Contact
            </Link>
          </div>
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-r from-[#25AAE2] to-blue-600 pt-14 pb-12 px-4 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white mb-8 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
              Savor Africa’s Finest
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-light">
              Download AfroPark Eats and enjoy authentic meals delivered fast!
            </p>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className={`bg-blue-200 text-[#25AAE2] hover:bg-blue-100 font-bold py-4 px-8 rounded-full flex items-center justify-center transition-all text-lg shadow-md ${
                downloading ? "opacity-75" : "hover:scale-105"
              }`}
            >
              {downloading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Downloading...
                </span>
              ) : (
                <span className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Now
                </span>
              )}
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-72 w-36 md:h-96 md:w-48 transform hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-blue-800 rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-200">
                <Image
                  src="/images/home.jpg"
                  alt="Afropark Eats App"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Features */}
      <div className="w-full max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center text-[#25AAE2] mb-16 animate-fade-in">
          Why AFROPARK EATS?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "Fast Delivery",
              text: "Authentic meals in 30 minutes or less!",
            },
            {
              icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
              title: "Rich Variety",
              text: "Explore African cuisines galore!",
            },
            {
              icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "Great Deals",
              text: "Daily discounts on your favorites!",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="h-8 w-8 text-[#25AAE2]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={feature.icon}
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-[#25AAE2] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Download Section */}
      <div className="w-full bg-gradient-to-r from-[#25AAE2] to-blue-700 py-20 px-4 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Hungry?
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Get AFROPARK EATS now!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="bg-white text-[#25AAE2] p-6 rounded-2xl shadow-xl w-full sm:w-80 transform hover:scale-105 transition-transform">
              <h3 className="font-bold text-lg mb-3">App Details</h3>
              <p className="text-sm mb-1">Version: 1.0.0</p>
              <p className="text-sm mb-1">Size: 15.2 MB</p>
              <p className="text-sm mb-4">Android 6.0+</p>
              <button
                onClick={handleDownload}
                disabled={downloading}
                className={`bg-[#25AAE2] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-all w-full ${
                  downloading ? "opacity-75" : ""
                }`}
              >
                {downloading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Downloading...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download APK
                  </span>
                )}
              </button>
            </div>
            <div className="relative h-72 w-36 transform hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-lg border-4 border-blue-200">
                <div className="relative w-full h-full flex items-center justify-center text-[#25AAE2] text-center p-4 font-bold">
                  QR Code Here
                </div>
              </div>
              <p className="absolute -bottom-8 w-full text-center text-sm font-medium">
                Scan to download
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#25AAE2] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">AFROPARK EATS</h3>
              <p className="text-blue-200 max-w-md">
                Bringing the taste of Africa to your door. Download now for a
                delicious experience!
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                {[
                  "About Us",
                  "FAQ",
                  "Contact Us",
                  "Privacy Policy",
                  "Terms of Service",
                ].map((link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase().replace(" ", "")}`}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-blue-400 mt-8 pt-8 text-center text-blue-200 text-sm">
            <p>© 2025 AFROPARK EATS. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Add this style in your global.css or a <style> tag */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

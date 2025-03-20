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

  // Directly link to the file in the public folder
  const link = document.createElement("a");
  link.href = "/app-download/afropark-eats.apk"; // Public files are accessible at root
  link.download = "afropark-eats.apk";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-blue-100 flex flex-col items-center">
      {/* Hero Banner */}
      <div className="w-full bg-sky-500 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Food At Your Fingertips
            </h1>
            <p className="text-xl mb-6">
              Download our app today and enjoy fresh meals delivered to your
              door!
            </p>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className={`bg-white text-sky-600 hover:bg-sky-100 font-bold py-4 px-8 rounded-full flex items-center justify-center transition-all text-lg ${
                downloading ? "opacity-75" : ""
              }`}
            >
              {downloading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-sky-600"
                    xmlns="http://www.w3.org/2000/svg"
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
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Downloading...
                </span>
              ) : (
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
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
                  Download APK
                </span>
              )}
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative h-64 w-32 md:h-96 md:w-48">
              <div className="absolute inset-0 bg-sky-800 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="relative w-full h-full flex items-center justify-center text-white text-center p-4">
                  <Image
                    src="/images/home.jpg"
                    alt="Food Delivery App Screenshot"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advertisement Banner */}
      <div className="w-full bg-blue-600 py-6 px-4 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold">
            Special Offer: 50% OFF on your first order!
          </h2>
          <p className="mt-2">Download now and use code: WELCOME50</p>
        </div>
      </div>

      {/* App Features */}
      <div className="w-full max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-sky-800 mb-12">
          Why Choose Our App?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-sky-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center text-sky-800 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600 text-center">
              Hot food delivered to your doorstep in 30 minutes or less!
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-sky-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center text-sky-800 mb-2">
              Wide Selection
            </h3>
            <p className="text-gray-600 text-center">
              Hundreds of restaurants and cuisines to choose from!
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-sky-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center text-sky-800 mb-2">
              Special Deals
            </h3>
            <p className="text-gray-600 text-center">
              Daily offers and discounts to save on your favorite meals!
            </p>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="w-full bg-gradient-to-r from-sky-600 to-blue-700 py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to order?
          </h2>
          <p className="text-xl mb-8">
            Download our app now and get started in seconds!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="bg-white text-sky-800 p-6 rounded-xl shadow-lg">
              <h3 className="font-bold mb-2">App Details</h3>
              <p className="text-sm mb-1">Version: 1.0.0</p>
              <p className="text-sm mb-1">Size: 15.2 MB</p>
              <p className="text-sm mb-4">Android 6.0+</p>

              <button
                onClick={handleDownload}
                disabled={downloading}
                className={`bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-all w-full ${
                  downloading ? "opacity-75" : ""
                }`}
              >
                {downloading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
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
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Downloading...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
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

            <div className="relative h-64 w-32 sm:h-72 sm:w-36">
              <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-lg border-4 border-sky-200">
                <div className="relative w-full h-full flex items-center justify-center text-sky-800 text-center p-4">
                  QR Code Here
                </div>
              </div>
              <p className="absolute -bottom-8 w-full text-center text-sm">
                Scan to download
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Advertisement */}
      <div className="w-full bg-sky-100 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-sky-800 mb-8">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md h-32 flex items-center justify-center">
              <p className="text-gray-400 font-bold">Partner Logo 1</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md h-32 flex items-center justify-center">
              <p className="text-gray-400 font-bold">Partner Logo 2</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md h-32 flex items-center justify-center">
              <p className="text-gray-400 font-bold">Partner Logo 3</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md h-32 flex items-center justify-center">
              <p className="text-gray-400 font-bold">Partner Logo 4</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-sky-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Food Delivery App</h3>
              <p className="text-sky-200 max-w-md">
                Your favorite restaurants, delivered fast to your door. Download
                our app today and enjoy the convenience!
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <Link href="/about" className="text-sky-200 hover:text-white">
                  About Us
                </Link>
                <Link href="/faq" className="text-sky-200 hover:text-white">
                  FAQ
                </Link>
                <Link href="/contact" className="text-sky-200 hover:text-white">
                  Contact Us
                </Link>
                <Link href="/privacy" className="text-sky-200 hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sky-200 hover:text-white">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-sky-700 mt-8 pt-8 text-center text-sky-300 text-sm">
            <p>© 2025 Food Delivery App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

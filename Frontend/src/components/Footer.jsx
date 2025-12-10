import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="w-full py-8 text-sky-100" style={{background:'linear-gradient(90deg,var(--bg-900),var(--bg-700))'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-blue-300 pb-8 gap-8">
          <div className="mb-6 lg:mb-0 flex flex-col items-center">
            <img src={logo} alt="logo" className="w-32 mb-4 md:mb-0 drop-shadow-lg" />
            <p className="text-xs text-blue-200 mt-2">© 2024 QuizApp. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div>
              <h3 className="font-semibold mb-2 underline text-sky-100">Quick LINKS</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-sky-200 transition">Home</a></li>
                <li><a href="#" className="hover:text-sky-200 transition">Quizzes</a></li>
                <li><a href="#" className="hover:text-sky-200 transition">About Us</a></li>
                <li><a href="#" className="hover:text-sky-200 transition">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 underline text-sky-100">Support</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-green-300 transition">FAQ</a></li>
                <li><a href="#" className="hover:text-green-300 transition">T&C</a></li>
                <li><a href="#" className="hover:text-green-300 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-300 transition">Contact Support</a></li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2 font-semibold text-sky-100">Connect with us</p>
              <div className="flex flex-row space-x-4">
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-sky-500 hover:bg-teal-400 transition"><FaFacebook className="text-2xl" /></a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-sky-400 hover:bg-teal-400 transition"><FaTwitter className="text-2xl" /></a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-400 hover:bg-teal-400 transition"><FaInstagram className="text-2xl" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-blue-200 text-xs gap-4">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-green-300 transition">Terms of Service</a>
            <a href="#" className="hover:text-green-300 transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

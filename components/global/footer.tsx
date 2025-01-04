import React from "react";
import { Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-slate-100 py-6 px-4 sm:px-6 border-t border-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:gap-4">
          {/* Project Name */}
          <div className="w-full text-center sm:w-auto">
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Appname
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-8">
            <a
              href="#"
              className="group flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-slate-800/50 hover:bg-blue-500/10 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="#"
              className="group flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-slate-800/50 hover:bg-blue-600/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
            </a>
            <a
              href="#"
              className="group flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-slate-800/50 hover:bg-red-500/10 transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-red-500 transition-colors" />
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm sm:text-xs font-medium">
            <span className="text-slate-400">© {currentYear}</span>
            <a
              href="#"
              className="text-slate-400 hover:text-slate-100 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-slate-100 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

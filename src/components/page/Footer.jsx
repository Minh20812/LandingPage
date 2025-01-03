import React from "react";
import { Plane, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        <Link className="flex items-center justify-center" to="/">
          <Plane className="h-6 w-6" />
          <span className="ml-2 text-xl font-bold">TravelEasy</span>
        </Link>
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4 text-sm">
          <Link
            className="flex items-center gap-1 hover:text-primary-600
            transition-colors"
            to="mailto:contact@traveleasy.com"
            title="Email
            us"
            aria-label="Send email to TravelEasy"
          >
            <Mail className="h-4 w-4" />
            contact@traveleasy.com
          </Link>
          <Link
            className="flex items-center gap-1 hover:text-primary-600
            transition-colors"
            to="tel:1800878835"
            title="Call us"
            aria-label="Call TravelEasy"
          >
            <Phone className="h-4 w-4" />
            1-800-TRAVEL
          </Link>
          <Link
            className="flex items-center gap-1 hover:text-primary-600
            transition-colors"
            to="/location"
            title="Our location"
            aria-label="Find TravelEasy location"
          >
            <MapPin className="h-4 w-4" />
            Find Us
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center sm:flex-1 sm:items-end">
        <nav className="flex gap-2 sm:gap-4">
          <Link
            className="text-xs hover:underline underline-offset-4
            hover:text-primary-600"
            to="/terms"
            aria-label="Terms and
            Conditions"
          >
            Terms
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4
            hover:text-primary-600"
            to="/privacy"
            aria-label="Privacy Policy"
          >
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Globe,
  Menu,
  MapPin,
  Phone,
  Search,
  Users,
  Plane,
  Contact,
} from "lucide-react";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 fixed top-0 w-full flex items-center border-b justify-between bg-white z-50 shadow">
      {/* Logo */}
      <Link className="flex items-center justify-center" to="/">
        <Plane className="h-6 w-6" />
        <div className="motion-preset-flomoji-[✈️] text-base"></div>
        <span className="ml-2 text-xl font-bold motion-preset-typewriter-[10]">
          TravelEasy
        </span>
      </Link>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetClose asChild>
              <Link to="/" className="flex items-center gap-2">
                <Plane className="h-6 w-6" />
                <span className="text-xl font-bold text-gray-800">
                  TravelEasy
                </span>
              </Link>
            </SheetClose>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          </SheetHeader>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                Discover
              </h3>
              <div className="flex flex-col gap-2">
                <SheetClose asChild>
                  <Link
                    to="/destinations"
                    className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-primary-600"
                  >
                    <Globe className="h-4 w-4" />
                    Destinations
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/tours"
                    className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-primary-600"
                  >
                    <MapPin className="h-4 w-4" />
                    Tours
                  </Link>
                </SheetClose>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                Search
              </h3>
              <div className="flex flex-col gap-2">
                <SheetClose asChild>
                  <Link
                    to="#"
                    className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-primary-600"
                  >
                    <Search className="h-4 w-4" />
                    Find Trips
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="#"
                    className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-primary-600"
                  >
                    <Users className="h-4 w-4" />
                    Travel Preferences
                  </Link>
                </SheetClose>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                Support
              </h3>
              <div className="flex flex-col gap-2">
                <SheetClose asChild>
                  <Link
                    to="/about"
                    className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-primary-600"
                  >
                    <Contact className="h-4 w-4" />
                    About Us
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-primary-600"
                  >
                    <Phone className="h-4 w-4" />
                    Contact Us
                  </Link>
                </SheetClose>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex gap-6 px-4 py-4">
        {["Home", "Destinations", "Tours", "About", "Contact"].map((item) => (
          <Link
            key={item}
            to={`${item.toLowerCase()}`}
            className="text-sm font-medium text-gray-700 hover:underline underline-offset-4"
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;

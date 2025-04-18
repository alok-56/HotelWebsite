import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function HotelFooter() {
  return (
    <footer className="bg-blue-900 text-blue-100 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Brill Rooms</h3>
            <p className="text-sm">
              Experience unparalleled comfort and elegance at our premium hotel
              locations worldwide.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-blue-300 hover:text-white transition-colors"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {/* {["Home", "About us", "Contact us", "B2B"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))} */}
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className="text-sm hover:text-white transition-colors"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/b2b"
                  className="text-sm hover:text-white transition-colors"
                >
                  B2B
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">+91 6291321220</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">connect@brillrooms.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Metro Station, EC-16 near City Centre
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  294, Noapara Rd, Chinar Park,Kolkata
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  146, Airport Gate, Italgacha,Kolkata
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  11J, Topsia Rd, Mirania Gardens
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  2nd Floor, NP-222, Naya-Pati Salt lake
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-sm">
              Subscribe to receive exclusive offers and updates.
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-blue-800 border-blue-700 text-white placeholder-blue-300"
              />
              <Button
                type="submit"
                variant="secondary"
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Brill Rooms. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              href="/privacypolicy"
              className="text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/termsservice"
              className="text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookiespolicy"
              className="text-sm hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

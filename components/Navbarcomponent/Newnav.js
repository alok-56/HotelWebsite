"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, Building2 } from "lucide-react";
import Loginpage from "../Logincomponents/Loginpage";
import { useDispatch, useSelector } from "react-redux";
import { fetchallhotels } from "@/lib/Redux/hotelSlice";

export default function OyoNavbar() {
  const [activeCity, setActiveCity] = useState(null);
  const { Hotels } = useSelector((state) => state.hotel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchallhotels());
  }, [dispatch]);

  return (
    <nav className="w-full border-b">
      {/* Top Navigation */}
      <div className="w-full mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="flex items-center">
          <div className="font-bold text-3xl">
            <span className="text-gray-900">BRILL ROOMS</span>
          </div>
        </Link>

        <div className="flex gap-4 items-center">
          <div className="hidden md:flex items-center gap-2 border-r pr-6">
            <div className="p-1 rounded-md bg-gray-100">
              <Phone className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <p className="text-sm font-semibold">0124-6201611</p>
              <p className="text-xs text-gray-500">Call us to Book now</p>
            </div>
          </div>
          <Loginpage />
        </div>
      </div>

      {/* City Navigation */}
      <div className="bg-gray-50 py-3 px-4 overflow-x-auto w-full">
        <div className="w-full flex justify-center items-center flex-wrap gap-4">
          {Hotels &&
            Hotels.map((item, index) => (
              <Link
                key={index}
                href={`/properties/${item._id}`}
                onClick={() => setActiveCity(item?.Branchname)}
              >
                <button
                  className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200 ${
                    activeCity === item?.Branchname
                      ? "text-red-600 bg-red-100"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  {item?.Branchname}
                </button>
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
}

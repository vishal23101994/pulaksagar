"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

function formatDate(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-IN");
}

function titleCase(text: string) {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export default function TrusteeSection() {

  const [trustees, setTrustees] = useState([]);

  useEffect(() => {
    fetch("/api/trustees")
      .then((res) => res.json())
      .then((data) => setTrustees(data));
  }, []);

  return (

    <section className="py-28 px-8 bg-gradient-to-b from-white via-[#FFF8ED] to-[#FFF2DE]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-24">

          <h2 className="text-5xl font-serif text-[#4B1E00]">
            Our Trustees
          </h2>

          <div className="w-24 h-[2px] bg-amber-600 mx-auto mt-4"></div>

        </div>


        {/* Grid */}

        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-24 gap-x-16">

          {trustees.map((t:any, i:number) => (

            <motion.div
              key={t.id}
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:i*0.05}}
              className="flex gap-6 items-start"
            >

              {/* Image */}

              <div className="relative flex-shrink-0">

                {/* Decorative Border */}

                <div className="absolute -inset-2 border border-gray-400"></div>

                <div className="absolute top-0 left-0 w-5 h-5 border-l-4 border-t-4 border-black"></div>
                <div className="absolute top-0 right-0 w-5 h-5 border-r-4 border-t-4 border-black"></div>
                <div className="absolute bottom-0 left-0 w-5 h-5 border-l-4 border-b-4 border-black"></div>
                <div className="absolute bottom-0 right-0 w-5 h-5 border-r-4 border-b-4 border-black"></div>

                <div className="w-[160px] h-[200px] overflow-hidden bg-white shadow-md">

                  <img
                    src={`https://jinsharnammedia.com${t.imageUrl}`}
                    className="w-full h-full object-cover"
                  />

                </div>

              </div>


              {/* Details */}

              <div className="font-serif text-[14px] text-[#333] leading-6">

                {/* Name */}

                <h3 className="text-[20px] font-semibold text-[#1f1f1f] mb-1">
                  {titleCase(t.name)}
                </h3>

                {/* Designation */}

                {t.designation && (
                  <p className="text-[#9A4B00] text-[15px] mb-1">
                    {titleCase(t.designation)}
                  </p>
                )}

                {/* Organisation */}

                <p className="text-gray-700 mb-2">
                  Pulak Jan Chetna Manch (Reg.)
                </p>

                {/* Address */}

                {(t.address || t.city) && (
                  <p className="flex gap-2 items-start mb-1">
                    <span>
                      {titleCase(t.address)}, {titleCase(t.city)}{" "}
                      {titleCase(t.state)} {t.pincode}
                    </span>
                  </p>
                )}

                {/* Phone */}

                {(t.phone || t.alternatePhone) && (
                  <p className="flex items-center gap-2 mb-1">
                    <Phone size={14}/>
                    {t.phone}
                    {t.alternatePhone && `, ${t.alternatePhone}`}
                  </p>
                )}

                {/* DOB + DOM */}

                {(t.dateOfBirth || t.dateOfMarriage) && (
                  <p className="mb-1">
                    {t.dateOfBirth && `DOB : ${formatDate(t.dateOfBirth)}`}
                    {t.dateOfBirth && t.dateOfMarriage && "  |  "}
                    {t.dateOfMarriage && `DOM : ${formatDate(t.dateOfMarriage)}`}
                  </p>
                )}

                {/* Email */}

                {t.email && (
                  <p className="flex items-center gap-2">
                    <Mail size={14}/>
                    {t.email}
                  </p>
                )}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}
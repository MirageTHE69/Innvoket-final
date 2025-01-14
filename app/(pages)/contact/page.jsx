"use client";

import { useEffect, useState } from "react"; // Import useEffect and useState
import { motion } from "framer-motion";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import config from "../../config";

const Contact = () => {
  const [isClient, setIsClient] = useState(false); // State to check if the component is rendered on the client

  useEffect(() => {
    // This will set the state to true when the component is mounted on the client side
    setIsClient(true);
  }, []);

  const { hotline, address, email, openingHours, mapCenter, socialMedia } =
    config.contact;

  // Render nothing until it's client-side
  if (!isClient) return null;

  return (
    <section className="max-w-[90vw] md:max-w-[80vw] mx-auto">
      <motion.h2
        className="py-20 font-unbounded text-white text-xl md:text-5xl text-center"
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        LET'S WORK TOGETHER
      </motion.h2>

      <motion.div
        className="bg-[#1f1f1fc4] rounded-3xl text-white grid grid-cols-1 md:grid-cols-3 gap-2 p-4 h-full text-xs md:text-xl font-unbounded"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="p-6 bg-[#292929] rounded-3xl flex flex-col space-y-4">
          <h2>Hotline:</h2>
          <h2>{hotline}</h2>
        </div>
        <div className="p-6 bg-[#292929] rounded-3xl flex flex-col space-y-4">
          <h2>Address:</h2>
          <h2>{address}</h2>
        </div>
        <div className="p-6 bg-[#292929] rounded-3xl flex flex-col space-y-4">
          <h2>Email:</h2>
          <h2>{email}</h2>
        </div>
        <div className="p-6 md:col-span-2 bg-[#292929] rounded-3xl flex flex-col space-y-4">
          <h2>Opening Hours:</h2>
          {openingHours.map((entry, index) => (
            <h2 key={index}>
              {entry.days}: {entry.hours}
            </h2>
          ))}
        </div>
        <div className="p-6 bg-[#292929] rounded-3xl flex flex-col space-y-4">
          <h2>Follow Us:</h2>
          <ul className="space-y-1">
            {socialMedia.map((platform, index) => (
              <li key={index}>{platform}</li>
            ))}
          </ul>
        </div>

        <div className="py-10 md:col-span-3">
          {/* Render map only on the client */}
          {isClient && (
            <MapContainer
              className="h-80 rounded-3xl"
              center={mapCenter}
              zoom={13}
              scrollWheelZoom={false}
              zoomControl={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </MapContainer>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

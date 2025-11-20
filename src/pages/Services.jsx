import React from "react";
import site from "../data/site";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <div>
      {/* Use the ServiceCard component which has all the modern styling */}
      <ServiceCard />
    </div>
  );
}

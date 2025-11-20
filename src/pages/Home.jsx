import React from "react";
import site from "../data/site";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <div>
      <Hero
        title={site.company.tagline}
        subtitle={site.company.heroSubtitle}
      />
{/* ServiceCard component is self-contained with all services */}
      <ServiceCard />
{/*       <section className="max-w-6xl mx-auto px-6 py-12"> */}
{/*         <h2 className="text-2xl font-semibold">Our Services</h2> */}
{/*         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"> */}
{/*           {site.services.map((s) => ( */}
{/*             <ServiceCard key={s.title} {...s} /> */}
{/*           ))} */}
{/*         </div> */}
{/*       </section> */}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { AdvocatesList } from "@/components/AdvocatesList";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAdvocates, setFilteredAdvocates] = useState([]);

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates")
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log("hello" + jsonResponse.data);
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      })
      .catch((error) => console.error("Error fetching advocates:", error));
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    console.log("filtering advocates...");
    const filtered = advocates.filter((advocate) => {
      return (
        advocate.firstName.toLowerCase().includes(value.toLowerCase()) ||
        advocate.lastName.toLowerCase().includes(value.toLowerCase()) ||
        advocate.city.toLowerCase().includes(value.toLowerCase()) ||
        advocate.degree.toLowerCase().includes(value.toLowerCase()) ||
        advocate.specialties.some((s) =>
          s.toLowerCase().includes(value.toLowerCase())
        ) ||
        advocate.yearsOfExperience.toString().includes(value)
      );
    });

    setFilteredAdvocates(filtered);
  };

  const handleReset = () => {
    console.log(advocates);
    setSearchTerm("");
    setFilteredAdvocates(advocates);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Nav />
      <Hero />

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SearchBar
            searchTerm={searchTerm}
            onChange={handleSearchChange}
            onReset={handleReset}
          />
          <AdvocatesList advocates={filteredAdvocates} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
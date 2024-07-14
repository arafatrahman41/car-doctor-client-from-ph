// import { useEffect, useState } from "react";
import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

// DRY --> Do not Repeat Yourself
const Services = () => {
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState('')
  // const [min, setMin] = useState(undefined);
  // const [max, setMax] = useState(undefined);
  const services = useServices(asc, search);
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //     fetch(`https://car-doctor-server-nine-lovat.vercel.app/services?sort=${asc ? = 'asc' : 'des'}`)
  //         .then(res => res.json())
  //         .then(data => setServices(data));
  // }, [])

const handleSearch = e => {
  e.preventDefault()
  const searchText = e.target.search.value;
  // console.log(searchText);
  setSearch(searchText)
}

  return (
    <div className="mt-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
          <form onSubmit={handleSearch} className="space-x-2 flex justify-center items-center">
          <input type="text" name="search" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          <input type="submit" value="Search" className="btn btn-warning" />
          </form>
        </p>
        <button onClick={() => setAsc(!asc)} className="btn btn-warning">
          {asc ? "Price: High to Low" : "Price: Low to High"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;

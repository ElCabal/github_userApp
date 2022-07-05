import React, { useState } from "react";
import useUsers from "./hooks/useUsers";

const Search = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  const { searchUser } = useUsers();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      return console.log("Ingrese el nombre del usuario");
    } else {
      searchUser(search);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-[#1F2A48] p-2 font flex justify-between gap-1 rounded-lg mb-4 font-spaceMono"
    >
      <div className="flex">
        <img src="image/icon-search.svg" alt="search" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none bg-[#1F2A48] text-white"
          name="search"
          value={search}
          type="text"
          placeholder="Search Github username"
        />
      </div>
      <button
        type="submit"
        className=" bg-[#07f] text-white p-4 rounded-md font-bold"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

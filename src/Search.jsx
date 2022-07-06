import React, { useState } from "react";
import useUsers from "./hooks/useUsers";
import { GoSearch } from "react-icons/go";
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
      className="bg-[#161B22] min-w-2xl p-2 text-sm flex justify-between gap-1 rounded-lg mb-4 font-spaceMono"
    >
      <div className="flex gap-4 items-center w-full">
        <GoSearch className="text-3xl text-[#3FB950]" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none bg-[#161B22] text-white w-full"
          name="search"
          value={search}
          type="text"
          placeholder="Search Github username"
          autoComplete="off"
        />
      </div>
      <button
        type="submit"
        className=" bg-[#3FB950] text-white p-4 rounded-md font-bold"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

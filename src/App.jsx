import "./App.css";
import { MdLocationPin } from "react-icons/md";
import { TbLink } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import Search from "./Search";
import useUsers from "./hooks/useUsers";
import imageDefault from "/image/Octocat.jpg";

function App() {
  const { user } = useUsers();
  console.log(user);
  return (
    <section className="min-h-screen bg-[#141C2F] pl-6 pr-6 sm:pl-14 sm:pr-14 md:pl-40 md:pr-40  xl:pl-80 xl:pr-80 pt-20 w-full">
      <Search />
      <article className=" bg-[#1F2A48] rounded-lg grid overflow-hidden grid-cols-3 grid-rows-4 h-[420px] gap-0 text-[0.8rem] font-spaceMono text-white">
        <div className=" flex justify-center items-center row-span-1 lg:row-span-4">
          <img
            className="w-20 rounded-full  overflow-hidden"
            src={user.avatar_url ? user.avatar_url : imageDefault}
            alt="cat"
          />
        </div>
        <div className="lg:flex p-4 row-span-1 col-start-2 col-span-2 lg:col-start-2">
          <div>
            <p>{user.name ? user.name : "The Octocat"}</p>
            <p className="text-[#116CFF]">
              @{user.login ? user.login : "octocat"}
            </p>
          </div>
          <p>{user.created_at ? user.created_at : "Joined 25 Jan 2011"}</p>
        </div>
        <div className=" col-span-4 row-span-2 lg:col-span-2 flex flex-col justify-between p-4">
          <p>{user.bio ? user.bio : "This profile has no bio"}</p>
          <article className="flex bg-[#141C2F] rounded-lg  justify-center gap-7 p-4 mt-4 mb-4 w-full">
            <div className=" text-center">
              <p>Repos</p>
              <span>{user.public_repos}</span>
            </div>
            <div className=" text-center">
              <p>Followers</p>
              <span>{user.followers}</span>
            </div>
            <div className=" text-center">
              <p>Following</p>
              <span>{user.following}</span>
            </div>
          </article>
          <article className="flex gap-2 flex-col">
            <div className="flex gap-2 items-center">
              <MdLocationPin />
              <p>{user.location}</p>
            </div>
            <div className="flex gap-2 items-center">
              <TbLink />
              <p className=" overflow-hidden">{user.blog}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaTwitter />
              <p>{user.twitter_username}</p>
            </div>
            <div className="flex gap-2 items-center">
              <MdLocationPin />
              <p>{user.company}</p>
            </div>
          </article>
        </div>
      </article>
    </section>
  );
}

export default App;

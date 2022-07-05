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
    <section className="min-h-screen bg-[#141C2F] pl-6 pr-6 sm:pl-14 sm:pr-14 md:pl-52 md:pr-52  xl:pl-96 xl:pr-96 pt-6 w-full">
      <Search />
      <article className=" bg-[#1F2A48] rounded-lg grid overflow-hidden grid-cols-5 grid-rows-4 text-[0.8rem] font-spaceMono text-white py-6 px-4">
        <div className=" flex justify-center row-span-1 col-span-2 lg:col-span-1 lg:row-span-4">
          <img
            className="w-24 h-24 lg:w-28  lg:h-28  rounded-full "
            src={user.avatar_url ? user.avatar_url : imageDefault}
            alt="cat"
          />
        </div>
        <div className="lg:flex lg:justify-between px-4 row-span-1 col-start-3 col-span-4 lg:col-start-2">
          <div>
            <p className="tracking-wide font-bold text-base lg:text-lg">
              {user.name ? user.name : "The Octocat"}
            </p>
            <p className="text-[#116CFF]">
              @{user.login ? user.login : "octocat"}
            </p>
          </div>
          <p>{user.created_at ? user.created_at : "Joined 25 Jan 2011"}</p>
        </div>
        <div className=" col-span-5 row-span-3 lg:col-span-4 flex flex-col justify-between px-4">
          <p className="">{user.bio ? user.bio : "This profile has no bio"}</p>
          <article className="flex bg-[#141C2F] rounded-lg  justify-center gap-7 p-4 w-full my-4">
            <div className="text-center">
              <p>Repos</p>
              <span className="font-bold text-sm">{user.public_repos}</span>
            </div>
            <div className=" text-center">
              <p>Followers</p>
              <span className="font-bold text-sm">{user.followers}</span>
            </div>
            <div className=" text-center">
              <p>Following</p>
              <span className="font-bold text-sm">{user.following}</span>
            </div>
          </article>
          <article className="flex gap-2 flex-col">
            <div className="flex gap-2 items-center">
              <MdLocationPin className="text-2xl" />
              <p>{user.location}</p>
            </div>
            <div className="flex gap-2 items-center">
              <TbLink className="text-2xl" />
              <p className=" overflow-hidden">{user.blog}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaTwitter className="text-2xl" />
              <p>{user.twitter_username}</p>
            </div>
            <div className="flex gap-2 items-center">
              <MdLocationPin className="text-2xl" />
              <p>{user.company}</p>
            </div>
          </article>
        </div>
      </article>
    </section>
  );
}

export default App;

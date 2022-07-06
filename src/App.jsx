import "./App.css";
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";
import { TbLink } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import Search from "./Search";
import useUsers from "./hooks/useUsers";
import imageDefault from "/image/Octocat.jpg";
import { useEffect } from "react";

function App() {
  const { user, searchUser } = useUsers();
  const formatDate = (user) => {
    if (user.created_at == undefined) {
      return;
    } else {
      const months = {
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "Jun",
        "07": "Jul",
        "08": "Aug",
        "09": "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec",
      };
      const dateCut = user.created_at.slice(0, 10).split("-");
      const changedDate = ` Joined ${dateCut[2]} ${months[dateCut[1]]} ${
        dateCut[0]
      }`;
      return changedDate;
    }
  };

  /* console.log(months[dateCut[1]]); */
  useEffect(() => {
    searchUser("octocat");
  }, []);
  return (
    <section className="min-h-screen bg-[#0D1117] flex flex-col justify-center items-center  w-full">
      <div className="max-w-2xl">
        <Search />
        <article className="bg-[#161B22] rounded-lg grid overflow-hidden grid-cols-5 grid-rows-4 text-[0.8rem] font-spaceMono text-white py-6 px-4 max-w-2xl">
          <div className=" flex justify-center row-span-1 col-span-2 lg:col-span-1 lg:row-span-4">
            <img
              className="w-24 h-24 lg:w-28  lg:h-28  rounded-full "
              src={user.avatar_url ? user.avatar_url : imageDefault}
              alt="cat"
            />
          </div>
          <div className="lg:flex lg:justify-between px-4 row-span-1 col-start-3 col-span-4 lg:col-start-2">
            <div className="flex flex-col lg:gap-2">
              <p className="tracking-wide font-bold text-base lg:text-xl">
                {user.name ? user.name : "The Octocat"}
              </p>
              <p className="text-[#3FB950] text-sm">
                @{user.login ? user.login : "octocat"}
              </p>
            </div>
            <p className="text-sm">{formatDate(user)}</p>
          </div>
          <div className=" col-span-5 row-span-3 lg:col-span-4 flex flex-col justify-between px-4">
            <p className="pt-2 lg:text-sm">
              {user.bio ? user.bio : "This profile has no bio"}
            </p>
            <article className="flex bg-[#0D1117] rounded-lg  justify-center gap-7 p-4 w-full my-4">
              <div className="text-center">
                <p className="lg:text-sm">Repos</p>
                <span className="font-bold text-sm lg:text-lg">
                  {user.public_repos}
                </span>
              </div>
              <div className=" text-center">
                <p className="lg:text-sm">Followers</p>
                <span className="font-bold text-sm lg:text-lg">
                  {user.followers}
                </span>
              </div>
              <div className=" text-center">
                <p className="lg:text-sm">Following</p>
                <span className="font-bold text-sm lg:text-lg">
                  {user.following}
                </span>
              </div>
            </article>
            <article className="flex gap-2 flex-col lg:text-sm">
              <div className="flex gap-2 items-center">
                {user.location ? (
                  <>
                    <MdLocationPin className="text-xl lg:text-2xl" />
                    <p>{user.location}</p>
                  </>
                ) : (
                  <>
                    <MdLocationPin className="text-xl lg:text-2xl text-gray-500" />
                    <p className=" text-gray-500">Not Available</p>
                  </>
                )}
              </div>
              <div className="flex gap-2 items-center">
                {user.blog ? (
                  <>
                    {" "}
                    <TbLink className="text-xl lg:text-2xl" />
                    <a
                      href={user.blog}
                      rel="nooper noreferrer"
                      target="_blank"
                      className="overflow-hidden"
                    >
                      {user.blog}
                    </a>
                  </>
                ) : (
                  <>
                    {" "}
                    <TbLink className="text-xl lg:text-2xl text-gray-500" />
                    <a
                      href={user.blog}
                      rel="nooper noreferrer"
                      target="_blank"
                      className="overflow-hidden text-gray-500"
                    >
                      Not Available
                    </a>
                  </>
                )}
              </div>
              <div className="flex gap-2 items-center">
                {user.twitter_username ? (
                  <>
                    <FaTwitter className="text-xl lg:text-2xl" />
                    <p>{user.twitter_username}</p>
                  </>
                ) : (
                  <>
                    <FaTwitter className="text-xl lg:text-2xl text-gray-500" />
                    <p className=" text-gray-500">Not Available</p>
                  </>
                )}
              </div>
              <div className="flex gap-2 items-center">
                {user.email ? (
                  <>
                    <MdOutlineEmail className="text-xl lg:text-2xl" />
                    <p>{user.email}</p>
                  </>
                ) : (
                  <>
                    <MdOutlineEmail className="text-xl lg:text-2xl text-gray-500" />
                    <p className=" text-gray-500">Not Available</p>
                  </>
                )}
              </div>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
}

export default App;

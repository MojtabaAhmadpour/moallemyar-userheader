import style from "./header.module.css";
import { RiMenu4Line } from "react-icons/Ri";
import { FaComments } from "react-icons/fa";
import { BsBellFill } from "react-icons/Bs";
import Image from "next/image";
import userimage from "../../../../public/assets/img/userimage.jpg";
import { BiSearchAlt } from "react-icons/Bi";
import Link from "next/link";

const UserHeader = () => {
  return (
    <div className={style.UserHeader}>
      <div className="flex justify-items-center items-center justify-around ">
        <div className="flex  items-center">
          <div className="flex flex-col m-2">
            <p className="text-right font-bold" text-md>
              name
            </p>
            <p className="text-right font-light text-xs">username</p>
          </div>
          <Image src={userimage} className="w-10 h-10 rounded-3xl m-2" />
          <BsBellFill className="mx-3 text-4xl bg-white rounded-3xl p-2" />
          <FaComments className="mx-3 text-4xl bg-white rounded-3xl p-2" />
        </div>
        <div className=" ">
          <form className="">
            <button type="submit">
              <BiSearchAlt className=" text-indigo-400 relative left-7 top-1 text-lg" />
            </button>
            <input
              type="text"
              placeholder="جستجو"
              className="w-96 bg-indigo-100 rounded-3xl p-2 pr-4 text-right text-indigo-400 "
            />
          </form>
        </div>

        <div className="flex  items-center ">
          <strong className="mr-6">Search Jobs</strong>
          <Link href="/">
            <RiMenu4Line className="text-4xl" />
          </Link>
        </div>
      </div>
      <div className="">
        <div className="flex bg-white mx-4 rounded-md p-2 ">
          <div className=" mx-2">
            <button className="bg-indigo-50 mx-2">text</button>
            <button className=" bg-indigo-600 mx-2">
              text
              <BiSearchAlt />
            </button>
          </div>
          <div className=" mx-2">search bar</div>
          <div className=" mx-2">dropdown filter</div>
        </div>
      </div>
      <div className="flex">
        <button className="bg-indigo-300 mx-1">text</button>
        <button className="bg-indigo-300 mx-1">text</button>
        <button className="bg-indigo-300 mx-1">text</button>
        <button className="bg-indigo-300 mx-1">text</button>
        <button className="bg-indigo-300 mx-1">text</button>
        <p>text</p>
      </div>
    </div>
  );
};

export default UserHeader;

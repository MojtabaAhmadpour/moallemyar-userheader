import style from "./header.module.css";
import { RiMenu4Line } from "react-icons/Ri";
import { FaComments } from "react-icons/fa";
import { BsBellFill } from "react-icons/Bs";
import Image from "next/image";
import userimage from "../../../../public/assets/img/userimage.jpg";
import { BiSearchAlt } from "react-icons/Bi";

const UserHeader = () => {
  return (
    <div className={style.UserHeader}>
      <div className="flex">
        <div className="flex flex-col">
          <div className="">
            <p>username</p>
          </div>
          <div className="">
            <p>underusername title</p>
          </div>
        </div>
        <div className="">
          <Image
            src={userimage}
            width={40}
            style={{ borderRadius: 200, padding: -10 }}
          />
        </div>
        <div className="">
          <BsBellFill />
        </div>
        <div className="">
          <FaComments />
        </div>
        <div className="">search bar</div>
        <strong>Search Jobs</strong>
        <div className="">
          <RiMenu4Line />
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

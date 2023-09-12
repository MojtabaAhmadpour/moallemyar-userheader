import style from "./header.module.css";
import { FaAlignLeft } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { BsBellFill } from "react-icons/Bs";
import Image from "next/image";
import userimage from "../../../../public/assets/img/userimage.jpg";
import { BiSearchAlt } from "react-icons/Bi";

const UserHeader = () => {
  return (
    <div className={style.UserHeader}>
      <div className="flex">
        <div className="">
          <FaAlignLeft />
        </div>
        <strong>Search Jobs</strong>
        <div className="">search bar</div>
        <div className="">
          <FaComments />
        </div>
        <div className="">
          <BsBellFill />
        </div>
        <div className="">
          <Image
            src={userimage}
            width={40}
            style={{ borderRadius: 200, padding: -10 }}
          />
        </div>
        <div className="flex flex-col">
          <div className="">
            <p>username</p>
          </div>
          <div className="">
            <p>underusername title</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex bg-white mx-4 rounded-md">
          <div className="">dropdown filter</div>
          <div className="">search bar</div>
          <div className="">
            <button className="bg-indigo-50">text</button>
            <button className=" bg-indigo-600"> text<BiSearchAlt/></button>
          </div>
        </div>
      </div>
      <div className="flex">
        <p>text</p>
        <button className="bg-indigo-300 mx-1">text</button>
        <button className="bg-indigo-300 mx-1">text</button>
        <button className="bg-indigo-300 mx-1">text</button>
        <button className="bg-indigo-300 mx-1">text</button>
        <button className="bg-indigo-300 mx-1">text</button>
      </div>
    </div>
  );
};

export default UserHeader;

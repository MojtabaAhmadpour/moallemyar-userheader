import style from "./header.module.css";
import { RiMenu4Line } from "react-icons/Ri";
import { FaComments } from "react-icons/fa";
import { BsBellFill } from "react-icons/Bs";
import Image from "next/image";
import { BiSearchAlt } from "react-icons/Bi";
import Link from "next/link";
import { Button, Space } from "antd";

const UserHeader = () => {
  return (
    <div className={style.UserHeader}>
      <div className="flex justify-items-center items-center justify-around mt-2 mb-8">
        <div className="flex  items-center">
          <div className="flex flex-col m-2">
            <Link href="">
              <p className="text-right font-bold" text-md>
                name
              </p>
            </Link>
            <Link href="">
              <p className="text-right font-light text-xs">username</p>
            </Link>
          </div>
          <Link href="">
            <img
              src="/assets/img/userimage.jpg"
              className="w-8 h-8 rounded-3xl m-2"
            />
          </Link>
          <Link href="">
            <BsBellFill className="mx-3 text-4xl bg-white rounded-3xl p-2" />
          </Link>
          <Link href="">
            <FaComments className="mx-3 text-4xl bg-white rounded-3xl p-2" />
          </Link>
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
      <div className="flex bg-white mx-4 rounded-2xl p-2  justify-center items-center">
        <div className="flex w-1/5 mx-2">
          <button className="bg-indigo-50 text-indigo-600 mx-2 w-24 rounded-3xl p-2  flex justify-center items-center">
            text <BiSearchAlt className="ml-1" />
          </button>
          <button className=" bg-indigo-600 text-indigo-100 mx-2 w-24 rounded-3xl p-2  flex justify-center items-center">
            text
            <BiSearchAlt className="ml-1 " />
          </button>
        </div>
        <div className="w-3/5 mx-2">
          <form className="">
            <input
              type="text"
              placeholder="............"
              className="w-full bg-white  p-2 pr-4 text-right text-indigo-400 "
            />
          </form>
        </div>
        <div className="w-1/5 flex mx-2 items-center justify-center">
          <div className={style.vl}></div>
          <form className="">
            <select
              id="drop"
              name=""
              className="w-36 ml-4 bg-white text-indigo-600"
            >
              <option value="one">one</option>
              <option value="two">two</option>
              <option value="three">three</option>
              <option value="four">four</option>
            </select>
          </form>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-center items-center pt-6 pb-8">
        <Space wrap>
          <Button type="text" className={style.btns}>Text Button</Button>
          <Button type="text" className={style.btns}>Text Button</Button>
          <Button type="text" className={style.btns}>Text Button</Button>
          <Button type="text" className={style.btns}>Text Button</Button>
          <Button type="text" className={style.btns}>Text Button</Button>
        </Space>
        <Link href="">
          <p className="text-indigo-200 ml-16">text</p>
        </Link>
      </div>
    </div>
  );
};

export default UserHeader;

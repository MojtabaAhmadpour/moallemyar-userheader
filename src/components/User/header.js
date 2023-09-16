import style from "./header.module.css";
import { RiMenu4Line } from "react-icons/Ri";
import { BiSearchAlt } from "react-icons/Bi";
import Link from "next/link";
import { Button, Space, Avatar, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { IoLogoWechat } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";

const UserHeader = () => {
  return (
    <div className={style.UserHeader}>
      <div className="flex justify-items-center items-center justify-around mt-2 mb-6">
        <div className="flex  items-center justify-center">
          <div className="flex flex-col mb-2 ml-4 text-center">
            <Link href="">
              <p className="text-left font-bold" text-sm>
                name
              </p>
            </Link>
            <Link href="">
              <p className="text-right font-light text-xs">username</p>
            </Link>
          </div>
          <div className="">
            <Space direction="vertical" size={16} >
              <Space wrap size={16} >
                <Avatar  icon={<UserOutlined /> } />
              </Space>
            </Space>
            <Space size="middle" className="mr-6">
              <Badge count={0} showZero className="">
                <Avatar
                  shape="circle"
                  size="middel"
                  icon={<IoNotificationsSharp />}
                  className="bg-white text-gray-400 items-center justify-center"
                />
              </Badge>
              <Badge count={0} showZero className="mr-4">
                <Avatar
                  shape="circle"
                  size="middel"
                  icon={<IoLogoWechat />}
                  className="bg-white text-gray-400 items-center justify-center"
                />
              </Badge>
            </Space>
          </div>
        </div>
        <div className=" ">
          <form className="">
            <button type="submit">
              <BiSearchAlt className=" text-indigo-400 absolute top-9 left-80 text-lg" />
            </button>
            <input
              type="text"
              placeholder="جستجو"
              className="w-80 bg-violet-100 rounded-3xl p-1 pr-4 text-right text-gray-color "
            />
          </form>
        </div>

        <div className="flex  items-center ">
          <strong className=" px-8">Search Jobs</strong>
          <Link href="/">
            <RiMenu4Line className="text-3xl" />
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
          <Button type="text" className={style.btns}>
            Text Button
          </Button>
          <Button type="text" className={style.btns}>
            Text Button
          </Button>
          <Button type="text" className={style.btns}>
            Text Button
          </Button>
          <Button type="text" className={style.btns}>
            Text Button
          </Button>
          <Button type="text" className={style.btns}>
            Text Button
          </Button>
        </Space>
        <Link href="">
          <p className="text-violet-400 ml-16">text</p>
        </Link>
      </div>
    </div>
  );
};

export default UserHeader;

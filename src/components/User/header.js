import style from "./header.module.css";
import { RiMenu4Line } from "react-icons/Ri";
import { BiSearchAlt } from "react-icons/Bi";
import Link from "next/link";
import { Button, Space, Avatar, Badge, Input, Dropdown } from "antd";
import { IoLogoWechat } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { UserOutlined } from "@ant-design/icons";
import { IoChevronDownOutline, IoLocationSharp } from "react-icons/io5";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

const UserHeader = () => {
  return (
    <div className={style.UserHeader}>
      <div className="flex justify-items-center items-center justify-around mt-2 mb-6">
        <div className="flex  items-center justify-center">
          <div className="flex flex-col mb-2 ml-4 text-center ">
            <Link href="">
              <p className="text-left font-bold" text-sm text-gray-600>
                name
              </p>
            </Link>
            <Link href="">
              <p className="text-right font-light text-xs">username</p>
            </Link>
          </div>
          <div className="">
            <Space direction="vertical" size={16}>
              <Space wrap size={14}>
                <Avatar icon={<UserOutlined />} />
              </Space>
            </Space>
            <Space size="middle" className="mr-6">
              <Badge count={0} showZero size="small" color="#40189d" className="right-0" >
                <Avatar
                  shape="circle"
                  size="middle"
                  icon={<IoNotificationsSharp />}
                  className="flex bg-white text-gray-600 items-center justify-center"
                />
              </Badge>
              <Badge count={0} showZero className="mr-4" color="#40189d" size="small">
                <Avatar
                  shape="circle"
                  size="middle"
                  icon={<IoLogoWechat />}
                  className="flex bg-white text-gray-600 items-center justify-center"
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
          <strong className=" px-8 text-gray-600">Search Jobs</strong>
          <Link href="/">
            <RiMenu4Line className="text-3xl text-gray-600" />
          </Link>
        </div>
      </div>
      <div className="flex bg-white mx-4 rounded-2xl p-2  justify-between justify-center items-center space-x-2">
        <div className="">
          <Space wrap>
            <Button type="text" className={style.rbtn}>
              <IoSearch />
              Text Button
            </Button>
            <Button type="text" className={style.lbtn}>
              <IoSearch /> Text Button
            </Button>
          </Space>
        </div>
        <div className="flex">
          <Input placeholder="search" className="w-96 border-none"/>
          <div className={style.vl}></div>
        </div>
        <div className="">
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            arrow
          >
            <Button className="flex items-center border-none text-bg-primary ">
              <IoChevronDownOutline className={style.dropdown}/> Dropdown
              <IoLocationSharp className="mr-2"/>
            </Button>
          </Dropdown>
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

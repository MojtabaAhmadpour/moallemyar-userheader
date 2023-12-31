"use client";
import style from "./header.module.css";
import { RiMenu4Line } from "react-icons/Ri";
import { BiSearchAlt } from "react-icons/Bi";
import Link from "next/link";
import {
  Button,
  Space,
  Avatar,
  Badge,
  Input,
  Dropdown,
  Popover,
  List,
  Skeleton,
} from "antd";
import { IoLogoWechat } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoSearch, IoCloseCircleOutline } from "react-icons/io5";
import { UserOutlined } from "@ant-design/icons";
import { IoChevronDownOutline, IoLocationSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";

//notification content function
const count = 3;
const notifData = [
  {
    title: "Title 1",
    message:"aaaaaaaa",
  },
  {
    title: "Title 2",
    message:"bbbbbbbb",
  },
  {
    title: "Title 3",
    message:"ccccccccc",
  },
  {
    title: "Title 4",
    message:"ddddddd",
  },
];

//dropdown btn json data function
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
      >
        لینک شماره 1
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
      >
        لینک شماره 2
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
      >
        لینک شماره 3
      </a>
    ),
  },
];

const UserHeader = () => {
  const [showMessage, setShowMessage] = useState(true)
  const hideMessage =() =>{
    setShowMessage(false)
  }
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(notifData)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );
    fetch(notifData)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        window.dispatchEvent(new Event("resize"));
      });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore} className={style.morebtn}>
          ... موارد بیشتر
        </Button>
      </div>
    ) : null;
  const content = (
    <List
      className="demo-loadmore-list w-80"
      // loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={notifData}
      renderItem={(item) => (
        <List.Item>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              style={{fontWeight:"bold"}}
              title={item.title}
              description={item.message}
              onClick ={hideMessage}
            />
            <Space>
              <Badge status="processing" />
            </Space>
          </Skeleton>
        </List.Item>
      )}
    />
  );

  return (
    <div className={style.UserHeader}>
      {/* row one contains the entire header */}
      <div className="flex justify-items-center items-center justify-around flex-row-reverse mt-2 mb-6">
        <div className="flex  items-center justify-center">
          <div className="flex items-center  ">
            <Space size="middle">
              <Badge
                count={0}
                showZero
                color="#40189d"
                style={{
                  insetInlineEnd: "initial",
                  right: "auto",
                  left: "0",
                  transform: "translate(0%, -50%)",
                }}
                size="small"
              >
                <Link href="#">
                  <Avatar
                    shape="circle"
                    size="middle"
                    icon={<IoLogoWechat />}
                    className="flex bg-white text-gray-600 items-center justify-center"
                  />
                </Link>
              </Badge>
              <Popover
                title="پیام ها "
                trigger="click"
                open={open}
                onOpenChange={handleOpenChange}
                content={content}
              >
                <Badge
                  count={0}
                  showZero
                  size="small"
                  color="#40189d"
                  className=""
                  style={{
                    insetInlineEnd: "initial",
                    right: "auto",
                    left: "0",
                    transform: "translate(0%, -50%)",
                  }}
                >
                  <Avatar
                    shape="circle"
                    size="middle"
                    icon={<IoNotificationsSharp />}
                    className="flex bg-white text-gray-600 items-center justify-center"
                  />
                </Badge>
              </Popover>
              <Space direction="vertical" size={14}>
                <Space wrap size="middle">
                  <Avatar icon={<UserOutlined />} className="" />
                </Space>
              </Space>
            </Space>
          </div>
          <div className="flex flex-col mb-2 ml-4 mr-2 text-center ">
            <Link href="">
              <p className="text-right font-light" text-sm text-gray-600>
                نام
              </p>
            </Link>
            <Link href="">
              <p className="text-right font-thin text-xs">نام کاربری</p>
            </Link>
          </div>
        </div>
        <div className=" ">
          <form className="">
            <button type="submit">
              <BiSearchAlt className=" relative right-80 top-2 left-2 text-indigo-400 text-lg" />
            </button>
            <input
              type="text"
              placeholder="جستجو..."
              className="w-80 bg-violet-100 placeholder:text-gray-500 rounded-3xl p-1 pr-4 text-right font-thin  focus:outline-none"
            />
          </form>
        </div>

        <div className="flex  items-center ">
          <Link href="/">
            <RiMenu4Line className="text-3xl text-gray-600" />
          </Link>
          <Link href="/">
            <strong className=" px-8 text-gray-600 font-light">
              جستجوی کار{" "}
            </strong>
          </Link>
        </div>
      </div>
      {/* row two contains the entire header */}
      <div className="flex flex-row-reverse bg-white mx-4 rounded-2xl p-2  justify-between justify-center items-center space-x-2">
        <div className="">
          <Space wrap>
            <Button type="text" className={style.lbtn}>
              دکمه شماره 1
              <IoSearch className="m-1" />
            </Button>
            <Button type="text" className={style.rbtn}>
              دکمه شماره 2
              <IoSearch className="m-1" />
            </Button>
          </Space>
        </div>
        <div className="flex">
          <Input
            placeholder="جستجو..."
            className="w-96 border-none text-gray-500  focus:outline-none"
          />
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
            <Button className={style.dropdownbtn}>
              <IoLocationSharp className={style.locationicon} />
              لیست بازشونده
              <IoChevronDownOutline className={style.dropdownicon} />
            </Button>
          </Dropdown>
        </div>
      </div>
      {/* row three contains the entire header */}
      <div className="flex flex-row-reverse justify-center items-center pt-6 pb-8">
        <Space wrap>
          <Button type="text" className={style.btns}>
            دکمه شماره 1{" "}
          </Button>
          <Button type="text" className={style.btns}>
            دکمه شماره 2{" "}
          </Button>
          <Button type="text" className={style.btns}>
            دکمه شماره 3{" "}
          </Button>
          <Button type="text" className={style.btns}>
            دکمه شماره 4{" "}
          </Button>
          <Button type="text" className={style.btns}>
            دکمه شماره 5{" "}
          </Button>
        </Space>
        <Link href="">
          <p className="text-gray-500 ml-20 font-thin">دکمه</p>
        </Link>
      </div>
    </div>
  );
};

export default UserHeader;
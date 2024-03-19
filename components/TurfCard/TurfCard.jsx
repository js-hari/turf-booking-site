import React from "react";
import { Avatar, Card, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { IoMdFootball, IoMdTennisball } from "react-icons/io";
import { MdSportsCricket } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const TurfCard = ({ turf }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center my-5 border rounded-xl mx-5 transition duration-300 hover:shadow-md">
      <div>
        <img
          src={turf?.header_image}
          className="rounded-t-md"
          alt="turf-image"
        />
      </div>
      <div className="p-4">
        <p className="font-semibold">{turf?.name}</p>
        <p className="">{turf?.location}</p>
      </div>
      <div className="flex px-4 py-3 justify-between items-center">
        <div className="flex flex-row  w-full">
          <IoMdFootball
            className="mr-2 border border-gray-400 transition duration-300 hover:bg-slate-200 rounded-full p-2 hover:scale-110"
            size={"3em"}
          />
          <MdSportsCricket
            className="mx-2 border border-gray-400 transition duration-300 hover:bg-slate-200 rounded-full p-2 hover:scale-110"
            size={"3em"}
          />
          <IoMdTennisball
            className="mx-2 border border-gray-400 transition duration-300 hover:bg-slate-200 rounded-full p-2 hover:scale-110"
            size={"3em"}
          />
        </div>
        <div className="flex">
          <FaArrowRight
            color="white"
            className="border bg-blue-500 cursor-pointer transition duration-300 hover:shadow-md hover:bg-blue-700 
            rounded-full p-2 hover:scale-110"
            size={"3em"}
          />
        </div>
      </div>

      {/* <Card
        onClick={() => router.push(`/venue/${turf.id}`)}
        hoverable
        style={{ width: 300 }}
        cover={<img alt="example" src={turf?.header_image} />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          }
          title={turf?.name}
          description={turf?.location}
        />
      </Card> */}
    </div>
  );
};

export default TurfCard;

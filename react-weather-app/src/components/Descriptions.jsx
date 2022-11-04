import React from "react";
import "./descriptions.css";

import { FaRegGrinBeamSweat, FaCloudSun } from "react-icons/fa";
import { HiFlag } from "react-icons/hi";
import { FiWind } from "react-icons/fi";
import { MdOutlineCompress, MdOutlineWaterDrop } from "react-icons/md";

function Descriptions({ weather }) {
  const cards = [
    {
      id: 1,
      icon: <FaCloudSun />,
      title: "cloudiness",
      data: weather.all.toFixed(),
      unit: "%",
    },
    {
      id: 2,
      icon: <HiFlag />,
      title: "wind direction",
      data: weather.deg.toFixed(),
      unit: "°",
    },
    {
      id: 3,
      icon: <FaRegGrinBeamSweat />,
      title: "feels like",
      data: weather.feels_like.toFixed(),
      unit: "°C",
    },
    {
      id: 4,
      icon: <MdOutlineCompress />,
      title: "air pressure",
      data: weather.pressure.toFixed(),
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "relative humidity",
      data: weather.humidity.toFixed(),
      unit: "%",
    },
    {
      id: 6,
      icon: <FiWind />,
      title: "wind speed",
      data: weather.speed.toFixed(),
      unit: "m/s",
    },
  ];
  return (
    <div className="section section__descriptions">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="description__card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
}

export default Descriptions;

import Card from "@mui/material/Card";
import Image from "next/image";
import { googleApps } from "./data";
import { CardActionArea } from "@mui/material";
import "./main.css";

const GoogleApps = () => {
  const data = googleApps;
  return (
    <div>
      <div className="h-[450px] w-[400px] flex items-center justify-center flex-wrap gap-5 rounded-[30px] bg-black bg-opacity-40 overflow-y-scroll scroll-snap-type-y mandatory-scroll-snap">
        {data.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="w-[100px] h-[130px] rounded-lg mt-5"
          >
            <CardActionArea className="bg-white bg-opacity-0 hover:bg-gray-500 hover:bg-opacity-20 hover:text-gray-200 rounded-lg">
              <div>
                <div className="p-5">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={70}
                    className="p-3"
                  />
                  <h1 className="text-xl font-[500] text-center mt-5 text-white">
                    {item.title}
                  </h1>
                </div>
              </div>
            </CardActionArea>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GoogleApps;

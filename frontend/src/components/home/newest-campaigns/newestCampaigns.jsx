import { home_wave_bg } from "../../../assets/svgs";
import "./newestCampaigns.css";

import axios from "axios";
import { getApi } from "../../../utils/getApi";

import { useEffect, useState } from "react";

import CustomCarousel from "../../customCarousel/CustomCarousel";
import CampaignCard from "../../campaigns/campaignCard/CampaignCard";

const NewestCampaigns = () => {
  const [data, setData] = useState();

  const fetchCampaigns = async () => {
    try {
      const { data } = await axios.get(getApi("/campaign"));
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const renderData = () => {
    return (
      <CustomCarousel>
        {data.map(({ id, title, description, mainImg }, index) => (
          <div className="carouselItem">
            <CampaignCard
              key={id}
              id={id}
              title={title}
              desc={description}
              img={mainImg}
              isdark={false}
            />
          </div>
        ))}
      </CustomCarousel>
    );
  };

  return (
    <div className="newestCampains_section ">
      <h1 className="newestCampains_section_header">Newest Campaigns</h1>

      {data ? <div>{renderData()}</div> : <h1>loading</h1>}

      <div className="newestCampgains_wave ">{home_wave_bg}</div>
    </div>
  );
};

export default NewestCampaigns;

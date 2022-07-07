import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { home_wave_bg } from "../../../assets/svgs";
import "./newestCampaigns.css";

import { getApi } from "../../../utils/getApi";

import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
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
    return data.map((campaign, i) => (
      <img className="test" src={campaign.mainImg} alt="so cool" />
    ));
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

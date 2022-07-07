import axios from "axios";

import CampaignCard from "../campaignCard/CampaignCard";
import "./campaignCards.css";
import { useEffect, useState } from "react";

import { getApi } from "../../../utils/getApi";

const CampaignCards = () => {
  //campaigns state
  const [campaigns, setCampaigns] = useState([]);

  //fetch campaigns
  const fetchCampaigns = async () => {
    //fetch data
    const { data } = await axios.get(getApi("/campaign"));

    setCampaigns(data);
  };

  //use effect
  useEffect(() => {
    fetchCampaigns();
  }, []);

  //render cards
  const renderCards = () => {
    return campaigns.length ? (
      campaigns.map(({ id, title, description, mainImg }, index) => (
        <CampaignCard
          key={id}
          id={id}
          title={title}
          desc={description}
          img={mainImg}
          isdark={true}
        />
      ))
    ) : (
      <h2>Loading</h2>
    );
  };

  //final return
  return <div className="campaignCards">{renderCards()}</div>;
};

export default CampaignCards;

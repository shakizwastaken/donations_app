import { fakeCampaigns } from "../../../utils/fakeData";
import CampaignCard from "../campaignCard/CampaignCard";
import "./campaignCards.css";

const CampaignCards = () => {
  const renderCards = () => {
    return fakeCampaigns.map(({ title, description, mainImg }, index) => (
      <CampaignCard
        key={index}
        id={index}
        title={title}
        desc={description}
        img={mainImg}
        isdark={true}
      />
    ));
  };

  return <div className="campaignCards">{renderCards()}</div>;
};

export default CampaignCards;

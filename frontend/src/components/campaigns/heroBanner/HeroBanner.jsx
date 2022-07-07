import "./heroBanner.css";

import bannerImg from "../../../assets/bannerImg.jpg";

const HeroBanner = () => {
  return (
    <div className="section campaigns_hero">
      <div className="campaigns_hero_header">
        <h1 className="campaigns_hero_header">Campaigns</h1>
        <img src={bannerImg} alt="banner img" />
      </div>
    </div>
  );
};

export default HeroBanner;

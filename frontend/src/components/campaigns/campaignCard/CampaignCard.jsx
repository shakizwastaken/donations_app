import "./campaignCard.css";

import { useNavigate } from "react-router-dom";

const CampaignCard = ({ id, title, desc, img, isdark }) => {
  const navigate = useNavigate();

  //navigate to campaign page
  const handleNavigate = () => {
    navigate(`/campaign/${id}`);
  };

  return (
    <div className="campaignCard">
      <div className="campaignCard_img" onClick={handleNavigate}>
        <img src={img} alt={`${title}`} />
      </div>
      <div
        className={`campaignCard_content_wrapper ${isdark ? "blue" : "green"}`}
      >
        <div className="campaignCard_content">
          <div className="campaignCard_info">
            <h1>{title}</h1>
            <h3>{desc}.</h3>
          </div>
          <button className="btn campaignCard_cta">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;

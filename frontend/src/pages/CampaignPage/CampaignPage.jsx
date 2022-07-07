import "./campaignPage.css";

import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import { getApi } from "../../utils/getApi";

import axios from "axios";

const CampaignPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [{ title, description, mainImg }, setData] = useState({});

  const fetchCampaign = async () => {
    const { data } = await axios.get(getApi(`/campaign/id/${id}`));
    console.log(data);
    setData(data);
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchCampaign();
  }, []);

  return (
    <div className="campaignPage">
      <div className="campaignPage_navbar">
        <button className="btn campaignPage_back" onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>
      </div>
      <div className="section">
        <h1 className="campaignPage_header">{title}</h1>
        <h2 className="campaignPage_subHeader">{description}</h2>
        <div className="campaignPage_content">
          <img
            className="campaignPage_mainImg"
            src={mainImg}
            alt={`${title}'s main img`}
          />

          <div className="campaignPage_info">
            <h1 className="campaignPage_info_header">{title}</h1>
            <button>Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;

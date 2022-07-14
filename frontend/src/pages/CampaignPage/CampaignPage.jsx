import "./campaignPage.css";

import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import DonateCta from "../../components/donate-cta/DonateCta";
import MailCollect from "../../components/mailCollect/MailCollect";

import { useFetchCampaign } from "../../hooks/useFetchCampaign";
import CampaignDonate from "../campaignDonate/CampaignDonate";

const CampaignPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    data: { title, description, mainImg },
  } = useFetchCampaign(id);

  const handleBack = () => {
    navigate(-1);
  };

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
          <div className="campaignPage_mainImg_container">
            <img
              className="campaignPage_mainImg"
              src={mainImg}
              alt={`${title}'s main img`}
            />
          </div>

          <div className="campaignPage_info">
            <h1 className="campaignPage_info_header">{title}</h1>

            <p className="campaign_info_desc">{description}</p>

            <CampaignDonate
              campaignId={id}
              campaignTitle={title}
              campaignImg={mainImg}
            />
          </div>
        </div>
      </div>
      <DonateCta />
      <MailCollect />
    </div>
  );
};

export default CampaignPage;

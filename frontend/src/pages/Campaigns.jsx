import CampaignCards from "../components/campaigns/campaignCards/CampaignCards";
import HeroBanner from "../components/campaigns/heroBanner/HeroBanner";
import DonateCta from "../components/donate-cta/DonateCta";
import MailCollect from "../components/mailCollect/MailCollect";

const Campaigns = () => {
  return (
    <>
      <HeroBanner />
      <DonateCta />
      <CampaignCards />
      <MailCollect />
    </>
  );
};

export default Campaigns;

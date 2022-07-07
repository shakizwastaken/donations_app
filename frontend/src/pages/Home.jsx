import DonateCta from "../components/donate-cta/DonateCta";
import HeroBanner from "../components/home/heroBanner/HeroBanner";
import NewestCampaigns from "../components/home/newest-campaigns/newestCampaigns";
import MailCollect from "../components/mailCollect/MailCollect";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <DonateCta />
      <NewestCampaigns />
      <MailCollect />
    </>
  );
};

export default Home;

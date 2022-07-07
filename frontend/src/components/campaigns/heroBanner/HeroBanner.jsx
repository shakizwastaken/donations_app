import "./heroBanner.css";

const HeroBanner = () => {
  return (
    <div className="section campaigns_hero">
      <div className="campaigns_hero_header">
        <h1 className="campaigns_hero_header">Campaigns</h1>
        <img
          src={
            "https://res.cloudinary.com/drdyt9nkv/image/upload/v1657184125/campaigns/bannerImg_xpw5wh.jpg"
          }
          alt="banner img"
        />
      </div>
    </div>
  );
};

export default HeroBanner;

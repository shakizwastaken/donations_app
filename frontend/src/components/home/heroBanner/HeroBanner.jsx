import { home_hero_bg } from "../../../assets/svgs";
import "./heroBanner.css";

const HeroBanner = () => {
  return (
    <div className="section home_hero ">
      <h1 className="section_header home_hero_header">
        <div className="">Together,</div> we can make a
        <div className="text-white fadeup">difference.</div>
      </h1>
      <div className="home_hero_bg">{home_hero_bg}</div>
    </div>
  );
};

export default HeroBanner;

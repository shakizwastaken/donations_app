import "./carousel.css";

import CampaignCard from "../campaigns/campaignCard/CampaignCard";

import { useState } from "react";

const Carousel = ({ imgs, leftIcon, rightIcon }) => {
  const [imgList, setImages] = useState(imgs);

  const handleLeft = () => {
    const result = [...imgList];
    result.push(result.shift());
    setImages(result);
    console.log(imgList);
  };

  const handleRight = () => {
    const result = [...imgList];
    result.unshift(result.pop());
    setImages(result);
  };

  const renderImgs = () => {
    return imgList.map(({ title, description, mainImg }, index) => (
      <CampaignCard title={title} desc={description} img={mainImg} />
    ));
  };

  return (
    <div className="carousel">
      <div
        className="carousel_arrows carousel_left cursor-pointer "
        onClick={handleLeft}
      >
        {leftIcon}
      </div>

      <div className="carousel_cards">{renderImgs()}</div>

      <div
        className="carousel_arrows carousel_right cursor-pointer"
        onClick={handleRight}
      >
        {rightIcon}
      </div>
    </div>
  );
};

export default Carousel;

import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { home_wave_bg } from "../../../assets/svgs";
import Carousel from "../../carousel/Carousel";
import "./newestCampaigns.css";

import { fakeCampaigns } from "../../../utils/fakeData";

const NewestCampaigns = () => {
  const imgs = [
    {
      src: "https://i.picsum.photos/id/610/350/450.jpg?hmac=nb8HQ0SpOjw5jtKih6ATppeqPnd64wbCmCqAZRqBfws",
      title: "some title",
    },
    {
      src: "https://i.picsum.photos/id/497/350/450.jpg?hmac=zZvOAvRU_LfrkxrE9ccmlfI9SRsPGdFTnycZ5jSlm5k",
      title: "some titleeee",
    },
    {
      src: "https://i.picsum.photos/id/916/350/450.jpg?hmac=OzI2yUUL4DPkCBWWUhqKn01xtKIfjHU_iPp_AFVUG28",
      title: "some titleeeeeeeeeeeeeeeeeeeeeee",
    },
    {
      src: "https://i.picsum.photos/id/731/350/450.jpg?hmac=vWgZdoOiYVj8cGnxODb3PVQ7VBJOF8uKVc-KPLOskRU",
      title: "some titeeeeeeeeeele",
    },
    {
      src: "https://i.picsum.photos/id/1012/350/450.jpg?hmac=LDUoweXn96d-uVnBKaeFBoruHAh3Tw3LxSMgLxkdNj0",
      title: "some title",
    },
  ];

  return (
    <div className="newestCampains_section ">
      <h1 className="newestCampains_section_header">Newest Campaigns</h1>

      <Carousel
        imgs={fakeCampaigns}
        leftIcon={<FontAwesomeIcon icon={faArrowAltCircleLeft} />}
        rightIcon={<FontAwesomeIcon icon={faArrowAltCircleRight} />}
      />

      <div className="newestCampgains_wave ">{home_wave_bg}</div>
    </div>
  );
};

export default NewestCampaigns;

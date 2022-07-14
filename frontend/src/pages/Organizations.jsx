import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import DonateCta from "../components/donate-cta/DonateCta";
import MailCollect from "../components/mailCollect/MailCollect";

const Organizations = () => {
  const renderData = () => {};

  return (
    <>
      <DonateCta />
      <MailCollect />
      {renderData()}
    </>
  );
};

export default Organizations;

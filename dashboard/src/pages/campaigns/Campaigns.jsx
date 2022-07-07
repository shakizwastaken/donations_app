import "./campaigns.css";

import { useFetch } from "../../hooks/useFetch";
import AddCampaign from "./components/addCampaign";

const Campaigns = () => {
  const [data, err, loading, fetchData] = useFetch("/campaign");

  const renderData = () => {
    console.log(data);
  };

  return (
    <div className="campaigns-page page">
      <h1 className="page-hero">Campaigns</h1>

      <AddCampaign />

      <div className="page-section">
        {data ? (
          renderData()
        ) : loading ? (
          <h2>loading</h2>
        ) : (
          <h2>No campaigns found</h2>
        )}
      </div>
    </div>
  );
};

export default Campaigns;

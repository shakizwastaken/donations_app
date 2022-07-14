import axios from "axios";
import { useEffect, useState } from "react";
import { getApi } from "../utils/getApi";

export const useFetchCampaign = (id) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(true);

  const fetchCampaign = async () => {
    try {
      const { data } = await axios.get(getApi(`/campaign/id/${id}`));
      setData(data);
    } catch (err) {
      setErr(err);
    }
  };

  useEffect(() => {
    fetchCampaign();
  }, []);

  return { data, setData, loading, setLoading, err, setErr, fetchCampaign };
};

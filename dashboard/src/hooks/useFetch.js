import axios from "axios";

import { useEffect, useState } from "react";

import { getApi } from "../utils/apiLink";

export const useFetch = (url) => {
  url = getApi(url);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState();

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url, { withCredentials: true });
      setData(data);
    } catch (err) {
      setErr(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, err, loading, fetchData];
};

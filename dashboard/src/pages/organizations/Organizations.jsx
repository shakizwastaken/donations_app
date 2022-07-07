import { useFetch } from "../../hooks/useFetch";
import "./organizations.css";

const Organizations = () => {
  const [data, err, loading, fetchData] = useFetch("/organization");

  const renderData = () => {};

  return (
    <div className="page">
      <h1 className="page-hero">Organizations</h1>

      <div className="page-section">
        {data ? (
          renderData()
        ) : loading ? (
          <h2>loading</h2>
        ) : (
          <h2>No organization found</h2>
        )}
      </div>
    </div>
  );
};

export default Organizations;

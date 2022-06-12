import { useEffect, useState } from "react";

function useFetch(service, id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service(id);
        setData(response);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [service, id]);

  return [data, loading, error];
}

export default useFetch;

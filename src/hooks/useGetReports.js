import { useState, useEffect } from "react";
import { API_BASE_URL } from "../config";

const useGetReports = params => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const path = params.path.join("/");
  const query = params.query ? `?${params.query}` : '';

  useEffect(() => {
    const getReports = async () => {
      setLoading(true);
      setIsError(false);
      if (reportInfo) {
        try {
          const response = await fetch(`${API_BASE_URL}/${path}${query}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const reports = await response.json();
          setData(reports);
        } catch (err) {
          return setIsError(true);
        }
      }
      return setLoading(false);
    }
    getReports();
  }, [params])

  return [data, loading, isError];
};

export default useGetReports;
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../config";

const useGetReports = (path, token, query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const queryString = query ? `?${query}` : '';

  useEffect(() => {
    const getReports = async () => {
      setLoading(true);
      setIsError(false);
      if (path) {
        try {
          const response = await fetch(`${API_BASE_URL}/reports/${path}${queryString}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-type': 'application/json'
            }
          });
          const reports = await response.json();
          setData(reports);
        } catch (err) {
          console.log(err.status)
          setIsError(true);
        }
      }
      setLoading(false);
    }
    getReports();
  }, [path, query, queryString, token])

  return [data, loading, isError];
};

export default useGetReports;
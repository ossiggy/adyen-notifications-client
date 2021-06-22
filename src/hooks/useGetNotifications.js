import { useState, useEffect } from "react";
import { API_BASE_URL } from "../config";

const useGetNotifications = pspReference => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getNotifications = async () => {
      setLoading(true);
      setIsError(false);
      if (pspReference) {
        try {
          const response = await fetch(`${API_BASE_URL}/${pspReference}`);
          const notifications = await response.json();
          setData(notifications);
        } catch (err) {
          return setIsError(true);
        }
      }
      return setLoading(false);
    }
    getNotifications();
  }, [pspReference])

  return [data, loading, isError];
};

export default useGetNotifications;
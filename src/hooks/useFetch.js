import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = url => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        setData(response.data.items);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setIsLoading(false);
        setError(e.message);
      }
    };
    fetchVideos();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;

import { useState, useEffect } from "react";

function useData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [url]);

  return data;
}


export default useData
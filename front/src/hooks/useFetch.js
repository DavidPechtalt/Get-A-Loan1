
import React, { useState, useEffect } from "react";

export default function useFetch(params) {
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(`http://localhost:4000/${params}`);
        if (!response.ok) throw new Error(response);
        const json = await response.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (error) {
        setError(`${error} Could not Fetch Data `);
        setIsPending(false);
      }
    };
    fetchData()
  },[]);
  return {data, isPending, error};
}

import React, { useState, useEffect } from 'react';

export default function useFetchPut(params) {
    const [success, setSuccess] = useState(false);
    const[isPending, setIsPending] = useState(false);
    const[error, setError] = useState();
    useEffect(() => {
        const fetchData = async () => {
          setIsPending(true);
          try {
            const options = {
                method: 'POST'
            }
            const response = await fetch(`http://localhost:4000/${params}`,options);
            if (!response.ok) throw new Error(response);
            const json = await response.json();
            setIsPending(false);
            setSuccess(true);
            setError(null);
          } catch (error) {
            setError(`${error} Could not Fetch Data `);
            setIsPending(false);
          }
        };
        fetchData()
      },[]);
  return (
    <div>useFetchPut</div>
  )
}

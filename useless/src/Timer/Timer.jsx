import React, { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0); // Initialize state with 0

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((previousCount) => previousCount + 1); // Increment count
    }, 1000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>Time: {count}</p>
    </>
  );
}

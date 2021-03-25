import React, { useState, useEffect } from "react";
function Two() {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  let arr = [2, 3];
  useEffect(() => {
    console.log("first", "is changed");
  }, [A, B]);
  const a1 = arr.map((num) => {
    return <p key={num}>thieerry {num}</p>;
  });
  return (
    <div>
      <p className="btn btn-info mx-3" onClick={() => setA(A + 1)}>
        Fist {A}
      </p>
      <p className="btn btn-info mx-3" onClick={() => setB(B + 1)}>
        Second {B}
      </p>
      {a1}
    </div>
  );
}

export default Two;

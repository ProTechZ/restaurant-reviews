import React, { useState, useEffect } from "react";

function ReviewsList() {
  const [data, setData] = useState<string>('');
  

  return (
    <div className="">
      <header className="">
        <h1 className="text-3xl font-bold underline text-blue-600">Welcome to React</h1>
        <p>{data}</p>
      </header>
    </div>
  );
}

export default ReviewsList;

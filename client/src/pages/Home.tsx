import React, { useState, useEffect } from "react";
import ReviewsList from "../components/ReviewsList";

function Home() {
  

  return (
    <div className="">

        <h1 className="text-3xl font-cursive text-center text-secondary">REVIEWS</h1>
   <ReviewsList/>
    </div>
  );
}

export default Home;

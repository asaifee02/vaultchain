import React from "react";

export const PageLoader = () => {
  const loadingImg = "https://media.tenor.com/9WFsBeb7sr8AAAAC/loading-gif.gif";

  return (
    <center>
      <img src={loadingImg} alt="Loading..." />
    </center>
  );
};
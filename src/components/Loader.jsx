import React from "react";
const Loader = () => {
  return (
    <div className="loader" role="status" aria-label="Loading portfolio">
      <div className="loader__logo">
        <img src="/assets/linkedin.jpeg" alt="Profile picture" width="112" height="112" />
      </div>
    </div>
  );
};
export default Loader;
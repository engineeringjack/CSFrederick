import React, { useState } from "react";

const CustomImage = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div style={{ position: "relative" }}>
      {loading && (
        <div
          style={{
            className: "image-container, imageLoader",
            height: "0",
            paddingBottom: "100%",
            fontSize: "24px",
            background: "#D3D3D3",
            borderRadius: "2%",
            animation: "colorShift 1.5s ease-in-out infinite alternate",
          }}
        ></div>
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={handleLoad}
        style={loading ? { display: "none" } : {}}
      />
    </div>
  );
};

export default CustomImage;

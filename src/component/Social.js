import React from "react";
import { Image } from "react-bootstrap";

const Social = () => {
  return (
    <div
      id="social"
      className="mr-3"
      sticky="bottom"
      style={{
        display: "flex",
        flexDirection: "column",
        float: "right",
        marginTop: "5%",
      }}
    >
      {/* Facebook */}
      <a href="https://www.facebook.com" target="_blank">
        <Image
          src="https://img.icons8.com/color/96/000000/facebook.png"
          className="social"
        />
      </a>

      {/* Line */}
      <a href="https://line.com" target="_blank">
        <Image
          src="https://img.icons8.com/color/96/000000/line-me.png"
          className="social"
        />
      </a>

      {/* Twitter */}
      <a href="https://twitter.com" target="_blank">
        <Image
          src="https://img.icons8.com/fluent/96/000000/twitter.png"
          className="social"
        />
      </a>

      {/* Whatsapp */}
      <a href="https://whatsapp.com" target="_blank">
        <Image
          src="https://img.icons8.com/officel/80/000000/whatsapp.png"
          className="social"
        />
      </a>
    </div>
  );
};

export default Social;

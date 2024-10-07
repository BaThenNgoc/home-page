import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Developer",
          "Sever-side Developer",
          "Backend Developer (Lào gì cũng tôn)",
          "Support Developer",
          "Spiritual support (Lót dép, đặt gạch) "
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

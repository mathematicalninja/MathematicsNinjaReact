import React from "react";

interface SelfPortraitProps {
  className?: string;
  refKey?: string;
}

const SelfPortrait: React.FC<SelfPortraitProps> = ({ className, refKey }) => {
  return (
    <div
      className={className ? className : "SelfPortrait"}
      key={refKey ? refKey : "SelfPortrait"}
    >
      <img
        src="me.png"
        alt="self portrait of me"
        style={{
          height: "9vw",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};
export default SelfPortrait;

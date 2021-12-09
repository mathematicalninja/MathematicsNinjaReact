import React from "react";

import RoundClock from "../components/clocks/RoundClock";
import MiniClock from "../components/clocks/MiniClock";
import BlogClass from "../components/blogClass/BlogClass";
import FullPageBody from "../PageTypes/FullPageBody";
import { useTime } from "../utils/other/useTime";

const NextFCClocks: React.FC<FCClocksProps> = ({}) => {
  return <FullPageBody content={<FCClocks />} />;
};

interface FCClocksProps {}

const FCClocks: React.FC<FCClocksProps> = ({}) => {
  const curTime = useTime(1000);

  return (
    <div>
      <RoundClock
        timeObject={curTime}
        fillHours="var(--Secondary-0)"
        fillMinutes="var(--Secondary-1)"
        fillSeconds="var(--Secondary-2)"
        offset={1}
        smooth={1}
        timeOrder={[2, 1, 0]}
        // snapToPrev={1}
      />
      <div
        style={{
          paddingTop: "10px",
          display: "grid",
          // gridTemplate: ". . . . .",
          gridTemplateColumns: "1fr  auto auto auto 1fr",
          // gridTemplateAreas: " ukTime usaTime utcTime ",
          width: "auto",
          height: "auto",
          // backgroundColor: "var(--Secondary-2)",
          fontSize: "100px",
        }}
      >
        <div />
        <MiniClock name="UK" timeOrder={[2, 1, 0]} timeObject={curTime} />
        <MiniClock name="USA" timeOrder={[1, 2, 0]} timeObject={curTime} />
        <MiniClock name="UTC" timeOrder={[0, 1, 2]} timeObject={curTime} />
        <div />
      </div>
    </div>
  );
};

export default NextFCClocks;

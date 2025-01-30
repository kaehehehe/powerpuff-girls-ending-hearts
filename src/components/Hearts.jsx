import React from "react";
import { useHeartsAnimation } from "../hooks/useHeartsAnimation";

const colors = ["#D0090C", "#DB5158", "#F0B1C1"];

export function Hearts() {
  useHeartsAnimation(colors);

  return (
    <svg
      id="hearts"
      viewBox="-600 -400 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <symbol id="heart" viewBox="-69 -16 138 138">
          <path
            d="M0,12
            C 50,-30 110,50  0,120
            C-110,50 -50,-30 0,12z"
          />
        </symbol>
      </defs>
    </svg>
  );
}

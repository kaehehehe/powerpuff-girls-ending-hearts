import { useEffect, useRef } from "react";

export const useHeartsAnimation = (colors) => {
  const SVG_NS = "http://www.w3.org/2000/svg";
  const SVG_XLINK = "http://www.w3.org/1999/xlink";
  const heartsRef = useRef([]);

  const createHeart = (n) => {
    const use = document.createElementNS(SVG_NS, "use");
    use.n = n;
    use.setAttributeNS(SVG_XLINK, "xlink:href", "#heart");
    use.setAttributeNS(null, "transform", `scale(${use.n})`);
    use.setAttributeNS(null, "fill", colors[n % colors.length]);
    use.setAttributeNS(null, "x", -69);
    use.setAttributeNS(null, "y", -69);
    use.setAttributeNS(null, "width", 138);
    use.setAttributeNS(null, "height", 138);

    return use;
  };

  useEffect(() => {
    const heartsContainer = document.getElementById("hearts");

    for (let n = 18; n >= 0; n--) {
      const heart = createHeart(n);
      heartsRef.current.push(heart);
      heartsContainer.appendChild(heart);
    }

    const frame = () => {
      window.requestAnimationFrame(frame);
      for (let i = 0; i < heartsRef.current.length; i++) {
        if (heartsRef.current[i].n < 18) {
          heartsRef.current[i].n += 0.01;
        } else {
          heartsRef.current[i].n = 0;
          heartsContainer.appendChild(heartsRef.current[i]);
        }
        heartsRef.current[i].setAttributeNS(
          null,
          "transform",
          `scale(${heartsRef.current[i].n})`
        );
      }
    };

    frame();
  }, []);
};

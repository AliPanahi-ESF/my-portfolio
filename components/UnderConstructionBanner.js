import { useEffect, useRef } from "react";

export default function UnderConstructionBadge() {
  const circleRef = useRef(null);

  useEffect(() => {
    const el = circleRef.current;
    let angle = 0;
    let animationFrame;

    const animate = () => {
      angle += 0.4;
      el.style.transform = `rotate(${angle}deg)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative w-56 h-56 flex items-center justify-center bg-transparent text-yellow-400">
        <div
          ref={circleRef}
          className="absolute w-full h-full flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50
                   m -40, 0
                   a 40,40 0 1,1 80,0
                   a 40,40 0 1,1 -80,0"
              />
            </defs>
            <text fontSize="6.5" fill="currentColor">
              <textPath xlinkHref="#circlePath" textLength="255">
                🚧 UNDER CONSTRUCTION ✦ COMING SOON ✦ 
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

import type { CSSProperties } from "react";

interface ShadowProps {
  size?: string | number;
  left?: string | number;
  top?: string | number;
}

export default function ShadowGreen({ size = "200px", left = "0", top = "0" }: ShadowProps) {
  const dinamicStyles: CSSProperties = {
    position: "absolute",
    zIndex: -1,
    width: size,
    height: size,
    left: left,
    top: top,
  };

  return (
    <div>
      <img src="/shadow.png" alt="green shadow" style={dinamicStyles} />
    </div>
  );
}

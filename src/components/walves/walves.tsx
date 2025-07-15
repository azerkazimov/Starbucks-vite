import "./walves.css";

interface WalvesProps {
  transform?: string;
  top?: string | number;
  left?: string | number;
  scale?: number | string;
}

export default function Walves({ transform, top, left, scale }: WalvesProps) {
  const dynamicStyles = {
    top: top,
    left: left,
    transform: transform,
    scale: scale,
  };
  return (
    <div className="walves" style={dynamicStyles}>
      <img src="/walves.png" alt="walves" />
    </div>
  );
}

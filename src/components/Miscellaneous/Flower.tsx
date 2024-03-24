"use client";
function Flower() {
  const flowers = ["🌼", "🌸", "🌺", "🌻", "🌷", "🪻", "💮", "🌹"];
  return <>{flowers[Math.floor(Math.random() * 8)]}</>;
}

export default Flower;

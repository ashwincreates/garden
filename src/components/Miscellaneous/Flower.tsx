"use client";

import { useEffect, useState } from "react";

function Flower() {
  const flowers = ["🌼", "🌸", "🌺", "🌻", "🌷", "🪻", "💮", "🌹"];
  const [plucked, setPlucked] = useState("");

  useEffect(() => setPlucked(flowers[Math.floor(Math.random() * 8)]), []);

  return <>{plucked}</>;
}

export default Flower;

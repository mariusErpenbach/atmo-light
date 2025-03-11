'use client'
import { useState } from "react";
import { startColorCycle } from "./actions/colorCycle";
import { startDiscoEffect } from "./actions/chaseColors";

export default function Home() {
  const [selectedMode, setSelectedMode] = useState(""); // Zustand für die aktive Klasse

  function handleModeSelect(e: any) {
    const value = e.target.value;

    // Toggle des ausgewählten Modus (wenn derselbe Button geklickt wird)
    setSelectedMode((prevMode) => (prevMode === value ? "" : value));

    // Aktionen basierend auf dem Modus ausführen
    if (value === "mode1") {
      if (selectedMode !== "mode1") {
        // startColorCycle();
      }
    } else if (value === "mode2") {
      if (selectedMode !== "mode2") {
        // startDiscoEffect();
      }
    } else if (value === "mode3") {
      console.log("Atmo-light gestartet");
    }
  }

  return (
    <div id="homePage">
      <h1>Choose Color Mode</h1>
      <main>
        <button
          onClick={handleModeSelect}
          value="mode1"
          className={selectedMode === "mode1" ? "selectedMode" : ""}
        >
          colorMode#1
        </button>
        <button
          onClick={handleModeSelect}
          value="mode2"
          className={selectedMode === "mode2" ? "selectedMode" : ""}
        >
          colorMode#2
        </button>
        <button
          onClick={handleModeSelect}
          value="mode3"
          className={selectedMode === "mode3" ? "selectedMode" : ""}
        >
          atmo-light
        </button>
      </main>
    </div>
  );
}

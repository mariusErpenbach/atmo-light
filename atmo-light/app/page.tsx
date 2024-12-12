'use client'
import {startColorCycle} from "./actions/colorCycle"
export default function Home() {
  return (
    <div>
    <button onClick={startColorCycle}>start colors</button>
    </div>
  );
}

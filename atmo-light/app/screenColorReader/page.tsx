'use client'
import { getTopColors } from "../actions/topColors";
import { mixColors } from "../actions/mixColors";
import { useEffect, useState } from "react";

export default function ScreencolorReader() {
    const [currentColors, setCurrentColors] = useState([]);
    const [mixedColor, setMixedColor] = useState("");

    useEffect(() => {
        const fetchColors = async () => {
            const colors = await getTopColors();
            console.log(colors);  // Loggt die Topfarben in die Konsole
            setCurrentColors(colors);  // Speichert die Farben im State

            // Berechne die gemischte Farbe, sobald die Farben abgerufen wurden
            const mixed = mixColors(colors);
            setMixedColor(mixed);  // Speichert die gemischte Farbe im State
        };

        fetchColors();  // Ruft die Funktion auf, um die Farben abzurufen
    }, []);  // Der leere Array stellt sicher, dass der Effekt nur einmal beim Mounten der Komponente ausgeführt wird.

    return (
        <div id="screenColorReader">
            <h1>Top Colors</h1>
            <div>
                {currentColors.length > 0 ? (
                    <ul>
                        {currentColors.map((color, index) => (
                            <li key={index}>
                                {`rgb(${color[0]}, ${color[1]}, ${color[2]})`}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading colors...</p>
                )}
            </div>

            {/* Zeigt die gemischte Farbe an */}
            {mixedColor && (
                <div>
                    <h2>Mixed Color</h2>
                    <div
                        style={{
                            backgroundColor: mixedColor,
                            padding: '20px',
                            color: '#fff',
                            textAlign: 'center',
                        }}
                    >
                        {mixedColor}
                    </div>
                </div>
            )}
        </div>
    );
}

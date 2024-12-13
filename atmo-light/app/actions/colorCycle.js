require('dotenv').config();




// Funktion, um eine zufällige Farbe zu generieren
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
}

const esp32Url = `http://${process.env.ESP32_IP}/setColor`;

let lastSentTime = 0;
const minInterval = 100; // 100ms = 10 Anfragen pro Sekunde

function sendColorToESP32(color) {
    const now = Date.now();
    if (now - lastSentTime >= minInterval) {
        lastSentTime = now;
        fetch("http://192.168.178.25/setColor", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(color),
        }).catch((error) => {
            console.error("Fehler beim Senden der Anfrage:", error);
        });
    }
}


// Funktion, die alle 3 Sekunden eine neue Farbe an den ESP32 sendet
let colorCycleActive = true;

function startColorCycle() {


    function cycle() {
        if (colorCycleActive) {
            setInterval(() => {
                const color = getRandomColor();
                sendColorToESP32(color);
                console.log("cycle complete")
            }, 2000); // Alle 2000 ms (2 Sekunden)
            
        }
    }
    cycle();
}
// Exportiere die Funktion
export { startColorCycle };

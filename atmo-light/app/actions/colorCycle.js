// Funktion, um eine zufällige Farbe mit spezifischen Bedingungen zu generieren
function getSpecialRandomColor() {
    let r, g, b;

    // Zufälliger Wert für einen der RGB-Werte unter 50
    const lowValue = Math.floor(Math.random() * 50); 

    // Zufälliger Wert für einen der RGB-Werte zwischen 100 und 150
    const midValue = Math.floor(Math.random() * 51) + 100;

    // Der letzte RGB-Wert soll immer 230 sein
    const highValue = 230;

    // Zufällige Auswahl, welcher Wert welchen RGB-Wert erhält
    const rgbArray = [lowValue, midValue, highValue];
    const randomIndex = Math.floor(Math.random() * 3);
    rgbArray[randomIndex] = 230; // Der Wert 230 wird zufällig gesetzt

    // Die restlichen Werte setzen
    r = rgbArray[0];
    g = rgbArray[1];
    b = rgbArray[2];

    return { r, g, b };
}


const esp32Url = `http://${process.env.NEXT_PUBLIC_ESP32_IP}/setColor`;
console.log(process.env.ESP32_IP);
let lastSentTime = 0;
const minInterval = 100; // 100ms = 10 Anfragen pro Sekunde

function sendColorToESP32(color) {
    const now = Date.now();
    if (now - lastSentTime >= minInterval) {
        lastSentTime = now;
        fetch(esp32Url, {
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
                const color = getSpecialRandomColor();
                sendColorToESP32(color);
                console.log("cycle complete")
            }, 500); // Alle 2000 ms (2 Sekunden)
            
        }
    }
    cycle();
}
// Exportiere die Funktion
export { startColorCycle };

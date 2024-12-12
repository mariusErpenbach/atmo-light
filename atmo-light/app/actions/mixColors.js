export function mixColors(colors) {
    let r = 0, g = 0, b = 0;

    // Gehe durch alle Farben und berechne den Durchschnitt der RGB-Werte
    colors.forEach(color => {
        const [red, green, blue] = color; // RGB-Werte extrahieren
        r += red;  // Rot
        g += green; // Grün
        b += blue; // Blau
    });

    const colorCount = colors.length;
    // Rückgabe in GBR-Reihenfolge
    return `rgb(${Math.round(g / colorCount)}, ${Math.round(b / colorCount)}, ${Math.round(r / colorCount)})`;
}

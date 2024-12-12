export async function getTopColors() {
    const fetchApi = "http://localhost:5000/top-colors";
    
    try {
        const response = await fetch(fetchApi);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        return data.top_colors; // Gibt das Array mit den 3 Farben zurück
    } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
        return []; // Gibt ein leeres Array zurück, falls ein Fehler auftritt
    }
}

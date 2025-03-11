import machine
import neopixel
import time

# Pin, an dem die LED-Leiste angeschlossen ist
pin = machine.Pin(4)  # Beispiel: Pin 4, passe diesen an deinen Anschluss an
n = 8  # Anzahl der LEDs in der Leiste, passe dies ebenfalls an
np = neopixel.NeoPixel(pin, n)

# RGB-Werte setzen
r, g, b = 50, 50, 50  # RGB-Werte für die LED-Leiste

# LEDs auf die angegebenen Werte setzen
for i in range(n):
    np[i] = (r, g, b)

np.write()  # LEDs aktualisieren

# Warten, damit die LEDs sichtbar sind
time.sleep(5)

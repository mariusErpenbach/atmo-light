from flask import Flask, jsonify
from PIL import Image
from collections import Counter
import mss

app = Flask(__name__)

def get_top_colors(image, num_colors=3):

    image = image.resize((100, 100))
    pixels = list(image.getdata())

    most_common = Counter(pixels).most_common(num_colors)
    return [color[0] for color in most_common]  

@app.route('/top-colors', methods=['GET'])
def top_colors():
    with mss.mss() as sct:
     
        screenshot = sct.grab(sct.monitors[0])
    
        image = Image.frombytes("RGB", (screenshot.width, screenshot.height), screenshot.rgb)
      
        colors = get_top_colors(image)
    return jsonify({"top_colors": colors})

if __name__ == '__main__':
    app.run(debug=True)

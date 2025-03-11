Atmo-Light ESP32 Setup

Overview

This folder contains the MicroPython code running on the ESP32, which controls the LED strip for the Atmo-Light project. The ESP32 receives commands from the web application via a local network API.

Steps Taken

1. Flashing MicroPython onto the ESP32

I first flashed MicroPython onto my ESP32 to enable scripting in Python. This allows for easy control of the hardware without needing to compile firmware.

2. Using Thonny IDE for Development

I chose Thonny as my development environment. It allows me to:

Write and upload Python scripts directly to the ESP32

Test and debug code in real-time without manually transferring files

3. Setting Up an API for Remote Control

The next step is to set up an API on the ESP32. This API will allow other devices on my local network (such as the web interface of Atmo-Light) to send commands to control the LED strip.

Next Steps

Implement an HTTP server on the ESP32 to receive API requests

Define endpoints for setting LED colors and effects

Connect the web application to the ESP32 API for real-time control

This README will be updated as development progresses.
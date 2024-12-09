import React, { useEffect, useRef } from 'react';

export default function ScreenCapture() {
    const videoRef = useRef(null);

    useEffect(() => {
        const { desktopCapturer } = window.require('electron');

        const getScreenStream = async () => {
            try {
                const sources = await desktopCapturer.getSources({ types: ['screen'] });
                
                // Wähle eine Quelle aus (hier 'Entire Screen')
                const source = sources.find(src => src.name === 'Entire Screen');
                
                if (!source) throw new Error('Keine geeignete Bildschirmquelle gefunden.');

                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: false,
                    video: {
                        mandatory: {
                            chromeMediaSource: 'desktop',
                            chromeMediaSourceId: source.id,
                        },
                    },
                });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
            } catch (error) {
                console.error("Fehler beim Zugriff auf den Bildschirm:", error);
            }
        };

        getScreenStream();
    }, []);

    return (
        <div>
            <h1>Bildschirmaufnahme</h1>
            <video ref={videoRef} style={{ width: '100%', border: '1px solid black' }} autoPlay muted></video>
        </div>
    );
}

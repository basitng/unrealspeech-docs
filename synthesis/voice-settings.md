---
outline: deep
---

# Voice Settings

Users have the ability to customize the available voices in order to achieve a desired voice type.

## Bitrate

Dictates the quality of the audio. Higher bitrates produce clearer, more detailed sound but increase file size, making them suitable for high-quality outputs. Lower bitrates are used for smaller files, beneficial for streaming or limited bandwidth scenarios.

- **Type**: string
- **Optional**: Yes
- **Default**: 192k
- **Values**: `16k, 32k, 48k, 64k, 128k, 192k, 256k, 320k`
- **Note**: Controls the audio quality and file size. Lower bitrate for smaller files and lower quality; higher bitrate for larger files and better quality.

## Speed

Controls how fast or slow the speech is delivered. Faster speeds can convey urgency or excitement, while slower speeds are useful for clarity and emphasis. It's important for aligning the speech pace with the listener's preferences or the content's nature.

- **Type**: float
- **Optional**: Yes
- **Default**: 0
- **Range**: -1.0 to 1.0
- **Note**: Alters the playback speed of the audio without changing the pitch. Negative values slow down, positive values speed up.
- **Examples**:
  - `0.5`: 50% faster (60s audio → 42s)
  - `-0.5`: 50% slower (60s audio → 90s)

## Pitch

Adjusts the tone of the voice. Higher pitch makes the voice sound lighter and younger, while lower pitch gives a deeper, more mature sound. It's essential for matching the voice to the context or character being portrayed

- **Type**: float
- **Optional**: Yes
- **Default**: 1.0 (0.92 for male voices on the landing page)
- **Range**: `0.5 to 1.5`
- **Note**: Adjusts the highness or lowness of the voice tone. Lower values for deeper tones, higher for higher tones. Default for male voices set lower for preference towards deeper voices.

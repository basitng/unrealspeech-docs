---
outline: deep
---

# Stream Endpoint

## Overview

The UnrealSpeech Stream Endpoint is designed to provide rapid audio synthesis from text input. This POST request endpoint, located at `https://api.v6.unrealspeech.com/stream`, is capable of processing up to 1000 characters and returning a playback stream of audio within 0.3 seconds. It is ideal for applications requiring the fastest response in audio synthesis.

## Endpoint

- **Method**: POST
- **URL**: `https://api.v6.unrealspeech.com/stream`

## Request

### Endpoint-Specific Body Schema

In addition to common parameters, this endpoint requires the following specific parameters:

1. **Text** (Required)

   - **Type**: string
   - **Description**: The text to be synthesized into audio. The text limit is 1000 characters.
   - **Allowed Values**: Any string up to 1000 characters.

2. **Codec** (Optional)

   - **Type**: string
   - **Default Value**: libmp3lame
   - **Allowed Values**:
     - `pcm_mulaw`: Recommended for phone calls.
     - `pcm_s16le`: Provides 22050 Hz raw audio.
     - `libmp3lame`: Used for MP3 format.

3. **Temperature** (Optional)
   - **Type**: float
   - **Default Value**: 0.25
   - **Allowed Values**: Ranges from 0.1 to 0.8.
   - **Description**: Adjusts the audio's expressiveness and stability. Lower values result in more deterministic and stable audio. Higher values make the audio more expressive and less deterministic, with increased chances of mispronunciation.

### Authorization

- **Type**: Bearer Token
- **Value**: Your API Key

### Headers

- **Authorization**: Bearer `<API_KEY>`

### Body

- **Type**: raw (JSON)

::: code-group

```bash [curl]
curl --location 'https://api.v6.unrealspeech.com/stream' \
--header 'Authorization: Bearer API_KEY' \
--data '{
    "Text": "Amid the intricate labyrinth of human neurons lies a molecule that has confounded and fascinated scientists for ages: the neurotransmitter known as dopamine. Often heralded as the pleasure molecule, dopamine'\''s role is far more nuanced than just mediating euphoria.",
    "VoiceId": "Scarlett",
    "Bitrate": "192k",
    "Pitch": 1.0,
    "Speed": 0
}'
```

```py [Python]
import requests

url = 'https://api.v6.unrealspeech.com/stream'
headers = {
    'Authorization': 'Bearer API_KEY'
}
data = {
    "Text": "Amid the intricate labyrinth of human neurons lies a molecule that has confounded and fascinated scientists for ages: the neurotransmitter known as dopamine. Often heralded as the pleasure molecule, dopamine's role is far more nuanced than just mediating euphoria.",
    "VoiceId": "Scarlett",
    "Bitrate": "192k",
    "Pitch": 1.0,
    "Speed": 0
}

response = requests.post(url, headers=headers, json=data)

# Check response status and content
if response.status_code == 200:
    print("Success:", response.json())
else:
    print("Error:", response.status_code)

```

:::
Resonse

#### `The response type is a buffer, it returns a playable`

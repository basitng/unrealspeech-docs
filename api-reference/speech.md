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

## Example Request

::: code-group

```bash [curl]
curl --location 'https://api.v6.unrealspeech.com/speech' \
--header 'Authorization: Bearer API_KEY' \
--data '{
    "Text": "The milestone Overture 2023-07-26-alpha.0 release includes four unique data layers: Places of Interest (POIs), Buildings, Transportation Network, and Administrative Boundaries. These layers, which combine various sources of open map data, have been validated and conflated through a series of quality checks, and are released in the Overture Maps data schema which was released publicly in June 2023. The Places dataset includes data on over 59 million places worldwide and will be a foundational element of navigation, local search, and many other location-based applications. The datasets are available for download at https://overturemaps.org/download/.",
    "VoiceId": "Scarlett",
    "Bitrate": "320k",
    "AudioFormat": "mp3",
    "OutputFormat": "uri",
    "TimestampType": "sentence",
    "sync": false
}'
```

```python [Python]
import requests

url = 'https://api.v6.unrealspeech.com/speech'
headers = {
    'Authorization': 'Bearer API_KEY'
}
data = {
    "Text": "The milestone Overture 2023-07-26-alpha.0 release includes four unique data layers: Places of Interest (POIs), Buildings, Transportation Network, and Administrative Boundaries. These layers, which combine various sources of open map data, have been validated and conflated through a series of quality checks, and are released in the Overture Maps data schema which was released publicly in June 2023. The Places dataset includes data on over 59 million places worldwide and will be a foundational element of navigation, local search, and many other location-based applications. The datasets are available for download at https://overturemaps.org/download/.",
    "VoiceId": "Scarlett",
    "Bitrate": "320k",
    "AudioFormat": "mp3",
    "OutputFormat": "uri",
    "TimestampType": "sentence",
    "sync": False
}

response = requests.post(url, headers=headers, json=data)

# Check response status and content
if response.status_code == 200:
    print("Success:", response.json())
else:
    print("Error:", response.status_code)

```

:::

Response

```json
{
  "CreationTime": "2023-09-05T14:29:35.89Z",
  "OutputUri": "https://unreal-tts-live-demo.s3-us-west-1.amazonaws.com/f0280927.mp3",
  "RequestCharacters": 656,
  "TaskId": "f0280927",
  "TaskStatus": "completed",
  "TimestampsUri": "https://unreal-tts-live-demo.s3-us-west-1.amazonaws.com/f0280927.json",
  "VoiceId": "Scarlett"
}
```

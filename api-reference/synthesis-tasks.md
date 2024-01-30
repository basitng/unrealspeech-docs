---
outline: deep
---

# SynthesisTasks Endpoint

## Overview

The UnrealSpeech SynthesisTasks Endpoint, accessible via a POST request to `https://api.v6.unrealspeech.com/synthesisTasks`, allows for processing large text-to-speech requests. It can handle up to 500,000 characters, immediately providing a TaskId for status tracking. This endpoint is optimized for cost savings and handling longer requests, processing approximately 700 characters per second.

## Endpoint

- **Method**: POST
- **URL**: `https://api.v6.unrealspeech.com/synthesisTasks`

## Request

### Endpoint-Specific Body Schema

In addition to the common parameters, the `/synthesisTasks` endpoint requires the following parameters:

1. **Text** (Required)

   - **Type**: string, array
   - **Description**: The text to be synthesized into audio. Up to 500,000 characters.
   - **Allowed Values**: A single string or an array of strings, each up to 500,000 characters.
   - **Additional Info**:
     - 800 characters typically result in 1 minute of audio.
     - 500,000 characters will result in approximately 10 hours of audio.
     - Processing time is about 1 second per 800 characters.
     - Posting a string returns a single OutputUri; posting an array returns a list of MP3 URLs.
     - For lengthy texts, it's recommended to use an array for gradual access to audio.

2. **TimestampType** (Optional)

   - **Type**: string
   - **Default Value**: sentence
   - **Allowed Values**:
     - `word`: Provides per-word timestamps.
     - `sentence`: Provides per-sentence timestamps (default).

3. **CallbackUrl** (Optional)
   - **Type**: string
   - **Description**: A URL for the server to POST the TaskId and TaskStatus.
   - **Sample Callback Body**:
     ```json
     {
       "TaskId": "8282b92d",
       "TaskStatus": "completed" // or "failed"
     }
     ```

### Headers

- **Authorization**: Bearer `<API_KEY>`

::: code-group

```bash [curl]
curl --location 'https://api.v6.unrealspeech.com/synthesisTasks' \
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

```py [Python]
import requests

url = 'https://api.v6.unrealspeech.com/synthesisTasks'
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
  "SynthesisTask": {
    "CreationTime": "2023-09-05T14:29:35.89Z",
    "OutputUri": "https://unreal-tts-live-demo.s3-us-west-1.amazonaws.com/f0280927.mp3",
    "RequestCharacters": 656,
    "TaskId": "f0280927",
    "TaskStatus": "scheduled",
    "TimestampsUri": "https://unreal-tts-live-demo.s3-us-west-1.amazonaws.com/f0280927.json",
    "VoiceId": "Scarlett"
  }
}
```

---
outline: deep
---

# Generating Your First Audio

This guide will walk you through the necessary steps to generate your first audio file using our Unreal Speech Async Voices API.

> [!WARNING]
> This guide provides instructions for generating audio files asynchronously. If you are interested in exploring realtime streaming, we recommend referring to this [comprehensive guide instead](/api-reference/stream).

Here is a Demo of using the python and Node sdk to download an audio file and save it locally:

::: code-group

```js [Node.js]
import { UnrealSpeechAPI, play, save } from "unrealspeech";
const unrealSpeech = new UnrealSpeechAPI("your_api_key");

const text_to_speech =
  "The milestone Overture 2023-07-26-alpha.0 release includes four unique data layers: Places of Interest (POIs), Buildings, Transportation Network, and Administrative Boundaries. These layers, which combine various sources of open map data, have been validated and conflated through a series of quality checks, and are released in the Overture Maps data schema which was released publicly in June 2023. The Places dataset includes data on over 59 million places worldwide and will be a foundational element of navigation, local search, and many other location-based applications. The datasets are available for download at https://overturemaps.org/download/.";

const voice_id = "Scarlett";
const bitrate = "320k";
const timestampType = "sentence";
const speechData = await unrealSpeech.speech(
  text_to_speech,
  voice_id,
  bitrate,
  timestampType
);

play(speechData);
save(speechData, "demo.mp3");
```

```python [Python]
from unrealspeech import UnrealSpeechAPI, play, save
api_key = 'YOUR_API_KEY'
speech_api = UnrealSpeechAPI(api_key)

text_to_speech = "The milestone Overture 2023-07-26-alpha.0 release includes four unique data layers: Places of Interest (POIs), Buildings, Transportation Network, and Administrative Boundaries. These layers, which combine various sources of open map data, have been validated and conflated through a series of quality checks, and are released in the Overture Maps data schema which was released publicly in June 2023. The Places dataset includes data on over 59 million places worldwide and will be a foundational element of navigation, local search, and many other location-based applications. The datasets are available for download at https://overturemaps.org/download/."
timestamp_type = "sentence"
voice_id = "Scarlett"
bitrate = "320k"

audio_data = speech_api.speech(text_to_speech, timestamp_type, voice_id, bitrate)
# Play audio
play(audio_data)
save(audio_data, "output.mp3")

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

## Using the V6 API

The UnrealSpeech Speech Endpoint, accessible via a POST request to `https://api.v6.unrealspeech.com/speech`, allows for the synthesis of text into audio with a limit of up to 3,000 characters. This endpoint provides synchronous responses, delivering both an MP3 file and JSON timestamps URLs.

## Endpoint

- **Method**: POST
- **URL**: `https://api.v6.unrealspeech.com/speech`

## Request

### Endpoint-Specific Body Schema

In addition to the common parameters, the `/speech` endpoint accepts the following specific parameters:

1. **Text** (Required)

   - **Type**: string
   - **Description**: The text to be synthesized into audio. The limit is 3,000 characters.
   - **Allowed Values**: Any string up to 3,000 characters.
   - **Additional Info**:
     - On average, 850 characters result in 1 minute of audio.
     - 3,000 characters will result in approximately 3.5 minutes of audio.
     - It takes about 1 second per 700 characters for processing.

2. **TimestampType** (Optional)
   - **Type**: string
   - **Default Value**: sentence
   - **Allowed Values**:
     - `word`: Provides per-word timestamps.
     - `sentence`: Provides per-sentence timestamps (default).
   - **Description**: Selects the granularity of timestamps in the response. The `word` option gives timestamps for each word, while the default `sentence` option provides them for each sentence.

### Headers

- **Authorization**: Bearer `<API_KEY>`

#### Examples

::: code-group

```bash
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

```py [Python]
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

#### Response

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

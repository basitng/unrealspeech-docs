---
outline: deep
---

# Overview

In order to gain a comprehensive understanding of how Unreal Speech operates, it is essential to familiarize yourself with the fundamental components of our API. Below, we will outline a few key concepts that are crucial for maximizing the potential of Unreal Speech.

## Available endpoints

| Endpoint                 | Description                                  |
| ------------------------ | -------------------------------------------- |
| `/stream`                | Stream audio for short, time-sensitive cases |
| `/speech`                | Generate speech with options (MP3 format)    |
| `/synthesisTasks`        | Manage synthesis tasks for longer text       |
| `/synthesisTasks/TaskId` | Check the status of a synthesis task         |

## Common Request Body Schema

| Property | Type   | Required? | Default Value | Allowed Values                             |
| -------- | ------ | --------- | ------------- | ------------------------------------------ |
| VoiceId  | string | Required  | N/A           | Scarlett, Liv, Dan, Will, Amy              |
| Bitrate  | string | Optional  | 192k          | 16k, 32k, 48k, 64k, 128k, 192k, 256k, 320k |
| Speed    | float  | Optional  | 0             | -1.0 to 1.0                                |
| Pitch    | float  | Optional  | 1.0           | 0.5 to 1.5                                 |

## Parameter Details

- **VoiceId:**

  - Dan: Young Male
  - Will: Mature Male
  - Scarlett: Young Female
  - Liv: Young Female
  - Amy: Mature Female

- **Bitrate:** Defaults to 192k. Use lower values for low bandwidth or to reduce the transferred file size. Use higher values for higher fidelity.

- **Speed:** Defaults to 0. Examples:

  - 0.5: makes the audio 50% faster. (i.e., 60-second audio becomes 42 seconds)
  - -0.5: makes the audio 50% slower. (i.e., 60-second audio becomes 90 seconds.)

- **Pitch:** Defaults to 1. However, on the landing page, we default male voices to 0.92 as people tend to prefer lower/deeper male voices.

## Rate Limit

| Plan  | Requests per second |
| ----- | ------------------- |
| Free  | 1                   |
| Basic | 2                   |
| Pro   | 8                   |

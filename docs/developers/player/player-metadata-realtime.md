---
id: player-metadata-realtime
title: دریافت اطلاعات لحظه ای پلیر
tags:
  - Player
  - Realtime
---

برای دریافت اطلاعات لحظه ای پلیر شما می توانید از **EventListener** بنام **`message`** استفاده کنید.

### نحوه استفاده

```html
<script>
  function receiveMessage(event) {
    // this check is necessary 
    // because the `message` handler accepts messages from any URI
    if (!event.origin.includes('.vidprotect.ir')) {
      return;
    }

    const messageData = event.data;
    console.log('Received message ', messageData);
  }

  window.addEventListener('message', receiveMessage);
</script>
```

### نمونه خروجی

```json
{
  "videoWatchCompleted": 43,
  "videoProgressTime": 26,
  "videoPlaybackSpeed": 1,
  "videoDuration": 59
}
```

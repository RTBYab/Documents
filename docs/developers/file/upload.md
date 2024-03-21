---
id: upload
title: آپلود ویدیو یا پادکست
tags:
  - Upload
  - tus
---

ویدپروتکت به جهت ارتقای کیفیت در هنگام آپلود و همچنین بهبود تجربه کاربری بهتر، از [پروتکل TUS](https://tus.io/)
برای آپلود ویدیو یا پادکست استفاده میکند.

برای آپلود ویدیو یا پادکست میتوانید از تکه کد های زیر استفاده کنید.

:::note
در صورتی که زبان برنامه نویسی شما در لیست پایین وجود ندارد، میتوانید به آدرس
[گیت هاب](https://github.com/tus)
این پروتکل رجوع کنید.
:::

## مولفه ها

* [کلید های دسترسی](https://vidprotect.ir/panel/settings/security-settings)
* آیدی پوشه (اختیاری)

| Key       | Type   | Required | In     | Example |
|-----------|--------|----------|--------|---------|
| bucket_id | string | true     | header | -       |

:::note
در صورت عدم ارسال آیدی پوشه، ویدیو یا پادکست ارسال شده در پوشه پیش فرض آپلود می شود.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="node"
values={[
{label: 'Node.js', value: 'node'},
{label: 'Python', value: 'py'}
]}>

<TabItem value="node">

```js
const fs = require('fs');
const tus = require('tus-js-client');

try {
    const a = new tus.Upload(fs.createReadStream('path/to/file.mp4'), {
        headers: {
            api_key: 'your_api_key',
            bucket_id: '_id',
            secret_key: 'your_secretKey_key'
        },
        onError: (d) => {
            console.log(d)
        },
        onSuccess: () => {
            console.log('Success', a.url)
        },
        metadata: {
            filename: 'file.mp4',
            type: 'video/mp4'
        },
        retryDelays: [0, 3000, 5000, 10000, 20000],
        endpoint: 'https://api.vidprotect.ir/v1/storage/bucket/video/upload'
    });

    a.start();
} catch (e) {
    console.log(e)
}
```

</TabItem>

<TabItem value="py">

```python
from tusclient import client

my_client = client.TusClient('https://api.vidprotect.ir/v1/storage/bucket/video/upload',
                              headers={
                                 api_key: 'your_api_key',
                                 bucket_id: '_id',
                                 secret_key: 'your_secretKey_key' 
                              })

uploader = my_client.uploader('path/to/file.mp4', chunk_size=200)

fs = open('path/to/file.mp4', mode=)
uploader = my_client.uploader(file_stream=fs, chunk_size=200)
uploader.upload()
```

</TabItem>

</Tabs>
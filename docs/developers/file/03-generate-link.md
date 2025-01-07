---
id: generate-link
title: ساخت لینک پخش
tags:
  - Generate link
---

برای ساخت لینک، ابتدا از کد زیر برای ارسال درخواست استفاده کنید.

## مولفه ها

* [کلید های دسترسی][] (اجباری)
* آیدی فایل (اجباری)
* شماره تلفن کاربر (اجباری)
* جلوگیری از به اشتراک گذاری لینک بر اساس IP (اختیاری)
* تنظیم آدرس IP (اختیاری)
* تحمل خطا (اختیاری)
* جلوگیری از زوم صفحه (اختیاری)
* فعال سازی واترمارک صوتی (اختیاری)
* بازه تکرار واترمارک صوتی (ثانیه) (اختیاری)
* حجم صدا واترمارک صوتی (اختیاری)
* محافظت 360 درجه (اختیاری)
* استفاده در حالت آفلاین (اختیاری)
* جلوگیری از اسکرین ریکورد (اختیاری)
* تاریخ انقضای لینک (اختیاری)
* ارسال پیامک هشدار (اختیاری)
* جلوگیری از به اشتراک گذاری لینک بر اساس نشست کاربر (اختیاری)
* فعال سازی پلی لیست (اختیاری)
* نمایش واترمارک سفارشی (اختیاری)
* ثابت ماندن واترمارک (اختیاری)

| Key                    | Type    | Required | In   | Example       |
|------------------------|---------|----------|------|---------------|
| fileId                 | string  | true     | body | -             |
| mobileNumber           | string  | true     | body | 09000000000   |
| accessWithMultiIp      | boolean | false    | body | false         |
| ip                     | string  | false    | body | 192.168.1.100 |
| faultTolerance         | number  | false    | body | 6             |
| preventZoom            | boolean | false    | body | false         |
| enableBeep             | boolean | false    | body | false         |
| beepInterval           | number  | false    | body | 15            |
| beepVolume             | float   | false    | body | 0.2           |
| securityProtection     | boolean | false    | body | false         |
| offlineMode            | boolean | false    | body | false         |
| needInstallApplication | boolean | false    | body | false         |
| expireTime             | string  | false    | body | 2h            |
| sendProtectionAlert    | boolean | false    | body | false         |
| enableActiveSession    | boolean | false    | body | true          |
| enablePlaylist         | boolean | false    | body | true          |
| extraWatermark         | string  | false    | body | a@gmail.com   |
| fixWatermark           | boolean | false    | body | false         |

#### Expire time

| Key | meaning |
|-----|---------|
| s   | seconds |
| m   | minutes |
| h   | hours   |
| d   | days    |
| w   | weeks   |
| M   | months  |
| y   | years   |

:::warning
قابلیت امکان جلوگیری از اسکرین ریکورد در نسخه آزمایشی بوده و نیازمند داشتن اپلیکیشن موبایل یا دکستاپ می باشد.
در صورتی که شما میخواهید در مرورگر محتوای خود را اجرا کنید این قابلیت را نادیده بگیرید
:::

:::warning
در صورت استفاده از قابلیت `extraWatermark` اطمینان حاصل کنید که مقدار ارسالی حاوی Space نباشد
:::

### نمونه کد

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
values={[
{label: 'CURL', value: 'curl'},
{label: 'Node.js', value: 'node'},
{label: 'Python', value: 'py'},
{label: 'GO', value: 'go'},
{label: 'PHP', value: 'php'}
]}>

<TabItem value="curl">

```shell
curl -X 'POST' \
  'https://api.vidprotect.ir/v1/storage/bucket/file/generate/link' \
  -H 'accept: application/json' \
  -H 'api_key: your_api_key' \
  -H 'secret_key: your_secret_key' \
  -H 'Content-Type: application/json' \
  -d '{
  "fileId": "_id",
  "mobileNumber": "0900000000"
}'
```

</TabItem>

<TabItem value="node">

```js
const superagent = require('superagent');

superagent('POST', 'https://api.vidprotect.ir/v1/storage/bucket/file/generate/link')
    .set('api_key', 'your_api_key')
    .set('secret_key', 'your_secret_key')
    .send({
      fileId: '_id',
      mobileNumber: '0900000000'
    })
    .then(data => console.log(data.body))
    .catch(console.log);
```

</TabItem>

<TabItem value="py">

```python
import requests

url = 'https://api.vidprotect.ir/v1/storage/bucket/file/generate/link'
headers = {
    'api_key': 'your_api_key',
    'secret_key': 'your_secret_key'
}
payload = {
    'fileId': '_id',    
    'mobileNumber': '0900000000'
}

try:
    response = requests.patch(url, headers=headers, json=payload)
    response.raise_for_status()
    data = response.json()
    print(data)
except requests.exceptions.RequestException as e:
    print('Error:', e)
```

</TabItem>


<TabItem value="go">

```go

package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	url := "https://api.vidprotect.ir/v1/storage/bucket/file/generate/link"
	apiKey := "your_api_key"
	secretKey := "your_secret_key"

	data := map[string]string{
		"fileId": "_id",
        "mobileNumber": "0900000000",
	}
	jsonData, _ := json.Marshal(data)

	req, err := http.NewRequest("PATCH", url, bytes.NewBuffer(jsonData))
	if err != nil {
		fmt.Println("Error creating request:", err)
		return
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("api_key", apiKey)
	req.Header.Set("secret_key", secretKey)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Error making request:", err)
		return
	}
	defer resp.Body.Close()

	fmt.Println("Response Status:", resp.Status)
}
```

</TabItem>

<TabItem value="php">

```php
<?php

$url = 'https://api.vidprotect.ir/v1/storage/bucket/file/generate/link';
$data = [
    'fileId' => '_id',
    'mobileNumber' => '0900000000'
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PATCH');
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'api_key: your_api_key',
    'secret_key: your_secret_key'
]);

$json_data = json_encode($data);
curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);

if(curl_errno($ch)){
    echo 'Curl error: ' . curl_error($ch);
}

curl_close($ch);
echo $response;
?>
```

</TabItem>

</Tabs>


سپس آدرس دریافتی را با استفاده از **`iframe`** در صفحه وبسایت خود بارگذاری کنید.

### نمونه iframe

```html

<iframe
   src="generate_link_url"
   style="height:360px;width:640px;border:none;"
   allowFullScreen="true"
   allow="fullscreen; encrypted-media *;"
></iframe>
```

[کلید های دسترسی]: https://vidprotect.ir/panel/settings/security-settings

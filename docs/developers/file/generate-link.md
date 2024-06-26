---
id: generate-link
title: ساخت لینک ویدیو یا پادکست
tags:
  - Generate link
---

برای ساخت لینک، ابتدا از کد زیر برای ارسال درخواست استفاده کنید.

## مولفه ها

* [کلید های دسترسی][] (اجباری)
* آیدی فایل (اجباری)
* شماره تلفن کاربر (اجباری)
* آدرس IP (اختیاری)
* تنظیم Beep (اختیاری)
* تاریخ انقضای لینک (اختیاری)

| Key          | Type                                             | Required | In   | Example       |
|--------------|--------------------------------------------------|----------|------|---------------|
| fileId       | string                                           | true     | body | -             |
| mobileNumber | string                                           | true     | body | 09000000000   |
| ip           | string                                           | false    | body | 192.168.1.100 |
| enableBeep   | boolean                                          | false    | body | false         |
| expireTime   | enum ['2h', '4h', '6h', '12h', '1d', '2d', '1M'] | false    | body | 2h            |

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
        "mobileNumber" => "0900000000",
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
   allow="encrypted-media *;"
/>
```

[کلید های دسترسی]: https://vidprotect.ir/panel/settings/security-settings

---
id: update
title: ویرایش پلی لیست
tags:
  - Update
---

## مولفه ها

* [کلید های دسترسی][] (اجباری)  
  برای دریافت این کلیدها به بخش **تنظیمات امنیتی** در پنل ویدپروتکت مراجعه کنید.
* آیدی پلی لیست (اجباری)
* عنوان (اجباری)
* لیست فایل ها (اجباری)

| Key        | Type       | Required | In   | Example                |
|------------|------------|----------|------|------------------------|
| playlistId | string     | true     | body | -                      |
| title      | string     | false    | body | Example 2              |
| files      | Playlist[] | false    | body | [PlayList, PlayList]   |

## Playlist

| Key   | Type   | Required | In   | Example                  |
|-------|--------|----------|------|--------------------------|
| _id   | string | true     | body | 671018d0403eba579a6f90e2 |
| title | string | false    | body | Example 2                |

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
curl -X 'PUT' \
  'https://api.vidprotect.ir/v1/playlist' \
  -H 'accept: application/json' \
  -H 'api_key: your_api_key' \
  -H 'secret_key: your_secret_key' \
  -H 'Content-Type: application/json' \
  -d '{
  "playlistId": "_id",
  "title": "Example 2"
}'
```

</TabItem>

<TabItem value="node">

```js
const superagent = require('superagent');

superagent('PUT', 'https://api.vidprotect.ir/v1/playlist')
  .set('api_key', 'your_api_key')
  .set('secret_key', 'your_secret_key')
  .send({
    title: 'Example 2',
    playlistId: '_id'
  })
  .then(data => console.log(data.body))
  .catch(console.log);
```

</TabItem>

<TabItem value="py">

```python
import requests

url = 'https://api.vidprotect.ir/v1/playlist'
headers = {
    'api_key': 'your_api_key',
    'secret_key': 'your_secret_key'
}
payload = {
    'title': 'Example 2',
    'playlistId': '_id'
}

try:
    response = requests.put(url, headers=headers, json=payload)
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
	url := "https://api.vidprotect.ir/v1/playlist"
	apiKey := "your_api_key"
	secretKey := "your_secret_key"

	data := map[string]string{
		"title":      "Example 2",
		"playlistId": "_id",
	}
	jsonData, _ := json.Marshal(data)

	req, err := http.NewRequest("PUT", url, bytes.NewBuffer(jsonData))
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

$url = 'https://api.vidprotect.ir/v1/playlist';
$data = [
    'title' => 'Example 2',
    'playlistId' => '_id'
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
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

[کلید های دسترسی]: https://vidprotect.ir/panel/settings/security-settings
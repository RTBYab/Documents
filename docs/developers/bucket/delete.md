---
id: delete
title: حذف باکت
tags:
  - Delete
---

**نکته مهم:** در صورت حذف باکت اطلاعات درون باکت حذف شده و غیر قابل برگشت می باشد.

## مولغه ها

* [کلید های دسترسی](https://vidprotect.ir/panel/settings/security-settings)
* آیدی باکت

| Key      | Type   | Required | In   | Example |
|----------|--------|----------|------|---------|
| bucketId | string | true     | body | -       |

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="node"
values={[
{label: 'Node.js', value: 'node'},
{label: 'Python', value: 'py'},
{label: 'GO', value: 'go'},
{label: 'PHP', value: 'php'}
]}>

<TabItem value="node">

```js
const superagent = require('superagent');

superagent('DELETE', 'https://api.vidprotect.ir/v1/storage/bucket')
    .set('api_key', 'your_api_key')
    .set('secret_key', 'your_secret_key')
    .send({
        bucketId: "_id"
    })
    .then(data => data.body)
    .catch(console.log);
```

</TabItem>

<TabItem value="py">

```python
import requests

url = 'https://api.vidprotect.ir/v1/storage/bucket'
headers = {
    'api_key': 'your_api_key',
    'secret_key': 'your_secret_key'
}
payload = {
    'bucketId': '_id'
}

try:
    response = requests.delete(url, headers=headers, json=payload)
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
	url := "https://api.vidprotect.ir/v1/storage/bucket"
	apiKey := "your_api_key"
	secretKey := "your_secret_key"

	data := map[string]string{
		"bucketId": "_id",
	}
	jsonData, _ := json.Marshal(data)

	req, err := http.NewRequest("DELETE", url, bytes.NewBuffer(jsonData))
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

$url = 'https://api.vidprotect.ir/v1/storage/bucket';
$data = [
    'bucketId' => '_id'
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
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
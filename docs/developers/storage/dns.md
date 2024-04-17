---
id: ip-whitelist
title: ip های وایت لیست
tags:
  - Whitelist
  - IP
  - Get
  - Update
---

منظور از ip های وایت لیست، دسته ای از ip های مجاز هستند که می توانند به ویدپروتکت درخواست
**[ساخت لینک][]**
ارسال کنند.

برای مثال: اگر
ip بک اند سایت خود را در داخل وایت لیست تعریف کنید فقط به درخواست های که از طریق وبسایت شما(وایت لیست)
ارسال شود، پاسخ داده می شود.

## بروزرسانی ip ها

## مولفه ها

* [کلید های دسترسی][] (اجباری)

| Key        | Type     | Required | In   | Example           |
|------------|----------|----------|------|-------------------|
| allowedDNS | string[] | true     | body | ['192.168.1.100'] |

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
  'https://api.vidprotect.ir/v1/storage/dns/whitelist' \
  -H 'accept: application/json' \
  -H 'api_key: your_api_key' \
  -H 'secret_key: your_secret_key' \
  -H 'Content-Type: application/json' \
  -d '{
  "allowedDNS": [ "192.168.1.100" ]
}'
```

</TabItem>

<TabItem value="node">

```js
const superagent = require('superagent');

superagent('POST', 'https://api.vidprotect.ir/v1/storage/dns/whitelist')
    .set('api_key', 'your_api_key')
    .set('secret_key', 'your_secret_key')
    .send({
      allowedDNS: [
        '192.168.1.100',
      ],
    })
    .then(data => console.log(data.body))
    .catch(console.log);
```

</TabItem>

<TabItem value="py">

```python
import requests

url = 'https://api.vidprotect.ir/v1/storage/dns/whitelist'
headers = {
    'api_key': 'your_api_key',
    'secret_key': 'your_secret_key'
}
payload = {
    'allowedDNS': [
      '192.168.1.100'
    ]
}

try:
    response = requests.post(url, headers=headers, json=payload)
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
	url := "https://api.vidprotect.ir/v1/storage/dns/whitelist"
	apiKey := "your_api_key"
	secretKey := "your_secret_key"

	data := map[string]interface{}{
		"allowedDNS": []string{
			"192.168.1.100",
		},
	}
	jsonData, _ := json.Marshal(data)

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
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

$url = 'https://api.vidprotect.ir/v1/storage/dns/whitelist';
$data = [
    'allowedDNS' => [
      '192.168.1.100'
    ]
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
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

## دریافت ip ها

## مولفه ها

* [کلید های دسترسی][] (اجباری)

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
curl -X 'GET' \
  'https://api.vidprotect.ir/v1/storage/dns/whitelist' \
  -H 'accept: application/json' \
  -H 'api_key: your_api_key' \
  -H 'secret_key: your_secret_key'
```

</TabItem>

<TabItem value="node">

```js
const superagent = require('superagent');

superagent('https://api.vidprotect.ir/v1/storage/dns/whitelist')
    .set('api_key', 'your_api_key')
    .set('secret_key', 'your_secret_key')
    .then(data => console.log(data.body))
    .catch(console.log);
```

</TabItem>

<TabItem value="py">

```python
import requests

url = 'https://api.vidprotect.ir/v1/storage/dns/whitelist'
headers = {
    'api_key': 'your_api_key',
    'secret_key': 'your_secret_key'
}

try:
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    data = response.json()
    print(data)
except requests.exceptions.RequestException as e:
    print(e)
```

</TabItem>


<TabItem value="go">

```go
package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	url := "https://api.vidprotect.ir/v1/storage/dns/whitelist"

	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		fmt.Println("Error creating request:", err)
		return
	}

	req.Header.Set("api_key", "your_api_key")
	req.Header.Set("secret_key", "your_secret_key")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Error making request:", err)
		return
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error reading response body:", err)
		return
	}

	fmt.Println(string(body))
}
```

</TabItem>

<TabItem value="php">

```php
<?php

$url = 'https://api.vidprotect.ir/v1/storage/dns/whitelist';
$api_key = 'your_api_key';
$secret_key = 'your_secret_key';

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'api_key: ' . $api_key,
    'secret_key: ' . $secret_key
]);

$response = curl_exec($ch);

if ($response === false) {
    echo 'Error: ' . curl_error($ch);
} else {
    echo $response;
}

curl_close($ch);
?>
```

</TabItem>

</Tabs>

[کلید های دسترسی]: https://vidprotect.ir/panel/settings/security-settings
[ساخت لینک]: ../file/generate-link.md

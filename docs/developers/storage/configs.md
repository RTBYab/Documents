---
id: config
title: تنظیمات فضای ذخیره سازی
tags:
  - Setting
  - Security
  - Get
  - Update
---

## بروزرسانی

## مولفه ها

* [کلید های دسترسی][] (اجباری)

| Key                    | Type                                                                                                                 | Required | In   | Desc                                                                                              |
|------------------------|----------------------------------------------------------------------------------------------------------------------|----------|------|---------------------------------------------------------------------------------------------------|
| speed                  | number                                                                                                               | false    | body | The speed of moving text on the screen                                                            |
| fontColor              | enum ['#ffff00', '#dda0dd',  '#800000', '#4b0082', '#ffa500', '#27ae60', '#16a085', '#af7ac5', '#e74c3c', '#66a310'] | false    | body | Text font color                                                                                   |
| fontSize               | number                                                                                                               | false    | body | Text font size                                                                                    |
| opacity                | number                                                                                                               | false    | body | The transparency of the text in the player, between 0 to 1 in float                               |
| disableAuthorization   | boolean                                                                                                              | false    | body | Direct video player url                                                                           |
| sendProtectionAlert    | boolean                                                                                                              | false    | body | Send warning SMS to high-risk users                                                               |
| ipValidation           | boolean                                                                                                              | false    | body | if true you need to set your server ip to the white list                                          |
| rotation               | boolean                                                                                                              | false    | body | The possibility of fixed text across the screen                                                   |
| displayTextOnScreen    | boolean                                                                                                              | false    | body | Prevent to show text on screen                                                                    |
| needInstallApplication | boolean                                                                                                              | false    | body | Prevent screen capture with third party application(trial version, do not use in your production) |
| player                 | Player                                                                                                               | false    | body | Player other setting                                                                              |
| link                   | Link                                                                                                                 | false    | body | Link protection                                                                                   |

### Player

| Key                | Type    | Required | In   | Desc                                  |
|--------------------|---------|----------|------|---------------------------------------|
| themeColor         | string  | false    | body | Player theme color                    |
| offlineMode        | boolean | false    | body | Prevent to show video on offline mode |
| securityProtection | boolean | false    | body | 360 degree security protection system |

### Link

| Key               | Type    | Required | In   | Desc                            |
|-------------------|---------|----------|------|---------------------------------|
| accessWithMultiIp | boolean | false    | body | Prevent to sharing video links  |
| expireTime        | string  | false    | body | Setting the expiration of links |

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
  'https://api.vidprotect.ir/v1/storage/protect/config' \
  -H 'accept: application/json' \
  -H 'api_key: your_api_key' \
  -H 'secret_key: your_secret_key' \
  -H 'Content-Type: application/json' \
  -d '{
  "fontColor": "#ffff00"
}'
```

</TabItem>

<TabItem value="node">

```js
const superagent = require('superagent');

superagent('POST', 'https://api.vidprotect.ir/v1/storage/protect/config')
    .set('api_key', 'your_api_key')
    .set('secret_key', 'your_secret_key')
    .send({
      fontColor: '#ffff00',
    })
    .then(data => console.log(data.body))
    .catch(console.log);
```

</TabItem>

<TabItem value="py">

```python
import requests

url = 'https://api.vidprotect.ir/v1/storage/protect/config'
headers = {
    'api_key': 'your_api_key',
    'secret_key': 'your_secret_key'
}
payload = {
    fontColor: "#ffff00"
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
	url := "https://api.vidprotect.ir/v1/storage/protect/config"
	apiKey := "your_api_key"
	secretKey := "your_secret_key"

	data := map[string]string{
        fontColor: "#ffff00",
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

$url = 'https://api.vidprotect.ir/v1/storage/protect/config';
$data = [
    'fontColor' => '#ffff00'
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

### دریافت

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
  'https://api.vidprotect.ir/v1/storage/protect/config' \
  -H 'accept: application/json' \
  -H 'api_key: your_api_key' \
  -H 'secret_key: your_secret_key'
```

</TabItem>

<TabItem value="node">

```js
const superagent = require('superagent');

superagent('https://api.vidprotect.ir/v1/storage/protect/config')
    .set('api_key', 'your_api_key')
    .set('secret_key', 'your_secret_key')
    .then(data => console.log(data.body))
    .catch(console.log);
```

</TabItem>

<TabItem value="py">

```python
import requests

url = 'https://api.vidprotect.ir/v1/storage/protect/config'
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
	url := "https://api.vidprotect.ir/v1/storage/protect/config"

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

$url = 'https://api.vidprotect.ir/v1/storage/protect/config';
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
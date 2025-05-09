---
id: get-playlist
title: دریافت اطلاعات پلی لیست
tags:
  - Get
---

## مولفه ها

* [کلید های دسترسی][] (اجباری)
* آیدی پلی لیست (اجباری)

| Key        | Type   | Required | In    | Example |
|------------|--------|----------|-------|---------|
| playlistId | string | true     | query | -       |

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
curl -X 'GET' \
  'https://api.vidprotect.ir/v1/playlist?playlistId=_id' \
  -H 'accept: application/json' \
  -H 'api_key: your_api_key' \
  -H 'secret_key: your_secret_key'
```

</TabItem>

<TabItem value="node">

```js
const superagent = require('superagent');

superagent('https://api.vidprotect.ir/v1/playlist?playlistId=_id').
  set('api_key', 'your_api_key').
  set('secret_key', 'your_secret_key').
  then(data => console.log(data.body)).
  catch(console.log);
```

</TabItem>

<TabItem value="py">

```python
import requests

url = 'https://api.vidprotect.ir/v1/playlist?playlistId=_id'
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
	url := "https://api.vidprotect.ir/v1/playlist?playlistId=_id"

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

$url = 'https://api.vidprotect.ir/v1/playlist?playlistId=_id';
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

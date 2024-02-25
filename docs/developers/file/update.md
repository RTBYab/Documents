---
id: update
title: ویرایش فایل
tags:
  - Update
---

## مولغه ها

* [کلید های دسترسی](https://vidprotect.ir/panel/settings/security-settings)
* آیدی فایل
* عنوان
* توضیحات (اختیاری)
* کاور ویدیو (اختیاری)

| Key         | Type   | Required | In   | Example                      |
|-------------|--------|----------|------|------------------------------|
| fileId      | string | true     | body | -                            |
| title       | string | true     | body | Example 2                    |
| file        | binary | false    | body | binary                       |
| description | string | false    | body | This is a sample description | 

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

const fileId = "_id";

superagent('POST', `https://api.vidprotect.ir/v1/storage/bucket/file/${fileId}`)
    .set('api_key', 'your_api_key')
    .set('secret_key', 'your_secret_key')
    .field('title', 'Example 2')
    .attach('file', 'path/to/file')
    .then(data => data.body)
    .catch(console.log);
```

</TabItem>

<TabItem value="py">

```python
import requests

fileId = "_id"
url = 'https://api.vidprotect.ir/v1/storage/bucket/file/' + fileId
api_key = "your_api_key"
secret_key = "your_secret_key"
file_path = "path/to/file"
title = "Example 2"

files = {'file': open(file_path, 'rb')}
data = {'title': title}

headers = {'api_key': api_key, 'secret_key': secret_key}

response = requests.post(url, files=files, data=data, headers=headers)

if response.status_code == 200:
    print("File uploaded successfully.")
    print("Response body:", response.text)
else:
    print("Failed to upload file. Status code:", response.status_code)
    print("Response body:", response.text)
```

</TabItem>


<TabItem value="go">

```go
package main

import (
	"bytes"
	"fmt"
	"io"
	"mime/multipart"
	"net/http"
	"os"
)

func main() {
    fileId := "_id"
	url := "https://api.vidprotect.ir/v1/storage/bucket/file/" + fileId
	apiKey := "your_api_key"
	secretKey := "your_secret_key"
	filePath := "path/to/file"
	file, err := os.Open(filePath)
	if err != nil {
		fmt.Println("Error opening file:", err)
		return
	}
	defer file.Close()

	body := &bytes.Buffer{}
	writer := multipart.NewWriter(body)
	part, err := writer.CreateFormFile("file", filePath)
	if err != nil {
		fmt.Println("Error creating form file:", err)
		return
	}
	_, err = io.Copy(part, file)
	if err != nil {
		fmt.Println("Error copying file:", err)
		return
	}
	err = writer.WriteField("title", "Example 2")
	if err != nil {
		fmt.Println("Error writing title field:", err)
		return
	}
	err = writer.Close()
	if err != nil {
		fmt.Println("Error closing writer:", err)
		return
	}

	request, err := http.NewRequest("POST", url, body)
	if err != nil {
		fmt.Println("Error creating request:", err)
		return
	}
	request.Header.Set("Content-Type", writer.FormDataContentType())
	request.Header.Set("api_key", apiKey)
	request.Header.Set("secret_key", secretKey)

	client := &http.Client{}
	response, err := client.Do(request)
	if err != nil {
		fmt.Println("Error sending request:", err)
		return
	}
	defer response.Body.Close()

	fmt.Println("Response Status:", response.Status)
	fmt.Println("Response Body:")
	_, err = io.Copy(os.Stdout, response.Body)
	if err != nil {
		fmt.Println("Error copying response body:", err)
		return
	}
}
```

</TabItem>

<TabItem value="php">

```php
<?php

$fileId = '_id';
$url = 'https://api.vidprotect.ir/v1/storage/bucket/file/' . $fileId;
$apiKey = 'your_api_key';
$secretKey = 'your_secret_key';
$filePath = 'path/to/file';
$title = 'Example 2';

$curl = curl_init();
$fileHandle = fopen($filePath, 'r');
$postFields = [
    'file' => curl_file_create($filePath),
    'title' => $title
];
curl_setopt_array($curl, [
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $postFields,
    CURLOPT_HTTPHEADER => [
        'api_key: ' . $apiKey,
        'secret_key: ' . $secretKey
    ]
]);

$response = curl_exec($curl);
if ($response === false)
    echo 'Error: ' . curl_error($curl);
else
    echo $response;

curl_close($curl);
fclose($fileHandle);
?>
```

</TabItem>

</Tabs>
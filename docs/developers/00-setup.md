---
id: setup
title: پیاده سازی سریع
tags:
  - Setup
---

برای پیاده سازی سریع ابتدا کافیست وارد پنل
[VidProtect][]
شوید سپس در قسمت ویدیو های من بر روی **`دریافت لینک فایل`** کلیک کرده و **`شناسه فایل`** را کپی کنید.

### قدم اول

![Image](./img/03.jpg)

### قدم دوم

![Image](./img/02.jpg)

بعد از کپی شناسه فایل درخواست خود را میتوانید با استفاده از CURL و یا
[API][]
ارسال کنید.

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

:::note
مقادیر بالا نیازمند تغییر است.

1. بجای api_key و secret_key کلید های احراز هویت خود از
   این [آدرس][] دریافت کرده و جایگزین کنید.
2. شناسه فایل کپی شده را با fileId جایگزین کنید.
3. شماره موبایل را به شماره موبایل کاربرتان تغییر دهید.
   :::

:::info
همچنین شما می توانید امکانات مختلف ویدپروتکت به ازای هر لینک تغییر دهید برای اطلاع بیشتر به این [آدرس](./file/generate-link.md) مراجعه کنید.
:::

[VidProtect]: https://vidprotect.ir/panel

[API]: ./file/generate-link.md#نمونه-کد

[آدرس]: https://vidprotect.ir/panel/settings/security-settings

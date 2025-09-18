---
id: wordpress-with-api
title: استفاده از API در وردپرس
tags:
  - API
---

**دانلود پلاگین:** [https://api.vidprotect.ir/v1/wp/plugin/download](https://api.vidprotect.ir/v1/wp/plugin/download)


## 🚀 نصب برای توسعه‌دهندگان

1. پلاگین را از لینک بالا دانلود کنید.
2. به مسیر **افزونه‌ها → افزودن → بارگذاری افزونه** در پیشخوان وردپرس بروید.
3. فایل `.zip` دانلود شده را آپلود و پلاگین را فعال کنید.

با فعال‌سازی پلاگین می‌توانید متدهای API VidProtect را در کد PHP خود استفاده کنید.

## ⚡️ استفاده از API برای لود کردن iframe

متد اصلی برای توسعه‌دهندگان `vid_load_iframe` است. با این متد می‌توانید iframe امن را در هر جایی از کد PHP خود بارگذاری
کنید.

```php
\VidProtect\vid_load_iframe(string $iframeId, string $url);
```

### 🔹 پارامترها:

* `iframeId` → شناسه HTML تگ iframe.
* `url` → لینک امنی که در حساب کاربری VidProtect ساخته‌اید.

### 📌 مثال:

```php
<iframe id="videoIframe" width="800" height="450" frameborder="0" allowfullscreen></iframe>

<?php
\VidProtect\vid_load_iframe('videoIframe', 'https://player.vidprotect.ir?id=f6be0fc1-15eb-466a-9f05-848c249e108b');
?>
```

### 📌 نکات مهم:

* می‌توانید iframe و فراخوانی API را **در هر نقطه‌ای از قالب یا پلاگین‌های PHP** خود قرار دهید.
* `iframeId` باید با ویژگی `id` تگ iframe برابر باشد.
* `url` باید لینک امنی باشد که در حساب VidProtect ساخته شده است.

## 📑 استفاده از شورت‌کد در وردپرس (اختیاری)

اگر می‌خواهید انعطاف‌پذیری برای ویرایشگرها فراهم کنید، می‌توانید از شورت‌کد استفاده کنید:

```text
[vid_iframe id="myPlayer" src="https://your-custom-link.com" width="800" height="450"]
```

* `id` → شناسه iframe
* `src` → لینک VidProtect
* `width` → عرض iframe
* `height` → ارتفاع iframe

این شورت‌کد به‌صورت داخلی همان متد `vid_load_iframe` را فراخوانی می‌کند، بنابراین توسعه‌دهندگان می‌توانند بین استفاده از
شورت‌کد یا استفاده مستقیم از PHP انتخاب کنند.

## نمونه کد وردپرس بصورت کد کوتاه وردپرس

```js
function display_iframe($atts) {
    $atts = shortcode_atts(
        array(
            'id' => 'vidprotect',
            'src' => 'https://player.vidprotect.ir?id=f6be0fc1-15eb-466a-9f05-848c249e108b',
            'width' => '600',
            'height' => '400',
        ),
        $atts,
        'vid_iframe'
    );

    ob_start();
    ?>
    <iframe 
        id="<?php echo esc_attr($atts['id']); ?>" 
        width="<?php echo esc_attr($atts['width']); ?>" 
        height="<?php echo esc_attr($atts['height']); ?>" 
        frameborder="0" 
        allowfullscreen>
    </iframe>
    <?php

    \VidProtect\vid_load_iframe($atts['id'], $atts['src']);

    return ob_get_clean();
}

add_shortcode('vid_iframe', 'display_iframe');
```


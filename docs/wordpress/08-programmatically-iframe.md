---
id: programmatically-iframe
title: شخصی سازی iframe بصورت برنامه نویسی شده
tags:
  - WordPress
---

این تابع با استفاده از شورتکد `[vid_iframe]` یک iframe داینامیک در صفحه نمایش می‌دهد.
به صورت پیش‌فرض، iframe با شناسه `player` و آدرس `https://player.vidprotect.ir?id=05be017d-c00c-45b4-abb9-131f39b82bb6` بارگذاری می‌شود.

### کد نمونه

```php
<?php

function load_iframe($atts) {
    $atts = shortcode_atts(
        array(
            'id' => 'player',
            'src' => 'https://player.vidprotect.ir?id=05be017d-c00c-45b4-abb9-131f39b82bb6',
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

    \VidProtect\vid_load_iframe("player", "https://player.vidprotect.ir?id=05be017d-c00c-45b4-abb9-131f39b82bb6");

    return ob_get_clean();
}

add_shortcode('vid_iframe', 'load_iframe');
```

### نحوه استفاده

برای نمایش iframe کافی است در برگه یا نوشته از شورتکد زیر استفاده کنید:

```
[vid_iframe]
```

یا با پارامترهای دلخواه:

```
[vid_iframe id="myplayer" src="https://player.vidprotect.ir?id=05be017d-c00c-45b4-abb9-131f39b82bb6" width="800" height="450"]
```

### خروجی

در خروجی یک iframe در HTML تولید می‌شود که با جاوااسکریپت تابع `vid_load_iframe` در فوتر، مقدار `src` را به صورت داینامیک تنظیم می‌کند.
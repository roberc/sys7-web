# Sys7Web

This is a living example of Angular Universal SSR.
You can take it and test how SSR works. 
My living example is hosted here: https://sample.ww7.co.uk/

Whole html is left in the single template file. Modify it, deploy to the server and have a good day.

# How To

I assume that you know how to set up Angular and clone repo.

After that use `npm run dev:ssr` to serve SSR pages from the `http://localhost:4000`

Production files will be generated with `npm run build:ssr`

All content in the dist/whatever you should upload to your production server and use `pm2` for serving.
Read more about it here: https://pm2.keymetrics.io/

To use Google Map you should assign to the variable in the code your API key.

# Credits

I am not an artist so I had to find html template ready to use.

I have used free single page template from here:
https://demos.onepagelove.com/html/namari/

To use few things that are not compatible with SSR in its original state I had to attach:
    
- ngStickyNav directive,
- parallax directive,
- ngx-page-scroll directive,
- lightbox,
- ngx-image-swiper

They all are under **src/app/soft** directory.


import {AfterContentInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {NgwWowService} from 'ngx-wow';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {PageScrollService} from './soft/page-scroll/ngx-page-scroll.service';
import {Lightbox} from './soft/lightbox/lightbox.service';
import {LightboxConfig} from './soft/lightbox/lightbox-config.service';
import {catchError, filter, map} from 'rxjs/operators';
import {Meta, Title} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {NgxSwiperConfig} from './soft/ngx-image-swiper/extras/NgxSwiperConfig';

/*
https://demos.onepagelove.com/html/namari/
 */

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterContentInit {
    show_site = false;
    mmenu_visible = false;
    show_bubbles = true;

    gallery: any = [];
    apiLoaded = false;
    show_video = false;

    cur_menu = 'banner';

    gmap_loaded: Observable<boolean>;

    swiper_images: string[] = null;

    record: {name: string, email: string, subject: string, body: string} = null;
    google_options: google.maps.MapOptions = {
        mapTypeId: 'roadmap',
        zoomControl: true,
        scrollwheel: true,
        disableDoubleClickZoom: true,
        maxZoom: 20,
        minZoom: 8,
        tilt: 45
    };
    zoom = 16;
    center: google.maps.LatLngLiteral;
    google;
    _router: Router;
    menus: any = [
        {id: 'banner', prompt: 'Home'},
        {id: 'about', prompt: 'About'},
        {id: 'gallery', prompt: 'Gallery'},
        {id: 'services', prompt: 'Services'},
        {id: 'testimonials', prompt: 'Testimonials'},
        {id: 'clients', prompt: 'Clients'},
        {id: 'pricing', prompt: 'Pricing'},
        {id: 'contacts', prompt: 'Contacts'},
    ];
    swiperConfig: NgxSwiperConfig = {
        navigationPlacement: 'inside',
        pagination: true,
        paginationPlacement: 'outside',
        slideShow: true,
        slideShowInterval: 6
    };
    send_msg() {
        // console.log(this.record);
    }
    constructor(private router: Router,
                private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any,
                private lightbox: Lightbox, private lightboxConfig: LightboxConfig, private wowService: NgwWowService,
                private title: Title, private meta: Meta, private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
        this._router = router;
        this.title.setTitle('Angular Website Test');
        this.meta.addTag({name: 'description', content: 'The template made to test my skills in Angular Universal SSR engine.'});

        this.router.events.pipe(
                    filter(event => event instanceof NavigationEnd)
                ).subscribe(() => {
                    // Reload WoW animations when done navigating to page,
                    // but you are free to call it whenever/wherever you like
                    this.wowService.init();
                    // console.log(event);
                });

        lightboxConfig.centerVertically = true;
        lightboxConfig.fadeDuration = 0.4;
        lightboxConfig.resizeDuration = 0.2;
        // lightboxConfig.showZoom = true;

        this.swiper_images = [];

        for (let i = 1; i <= 6; i++) {
            const src = 'assets/images/gallery-images/gallery-image-' + i + '.jpg';
            const caption = 'Image ' + i + ' caption here';
            const thumb = 'assets/images/gallery-images/gallery-image-' + i + '.jpg';
            const album = {
                src: src,
                caption: caption,
                thumb: thumb,
            };

            this.gallery.push(album);
            this.swiper_images.push(src);
        }
        if (isPlatformBrowser(this.platformId)) {
            this.gmap_loaded = http.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAq6NuB5SeC_48vHslYcw0ghKdo4wlTNrA', 'callback')
                .pipe(
                    map(() => {
                        this.google = window['google'];
                        return true;
                    }),
                    catchError(() => of(false)),
                );

            navigator.geolocation.getCurrentPosition((position) => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                }
            });
        }
    }

    ngAfterContentInit() {
        setTimeout(() => this.show_site = true, 200);
        setTimeout(() => this.show_bubbles = false, 1000);
    }

    show_mobile_menu() {
        this.mmenu_visible = !this.mmenu_visible;
    }

    ngOnInit() {
        this.pageScrollService.scroll({
            document: this.document,
            scrollTarget: '.scrollto',
        });
        this.record = {
            name: '',
            email: '',
            subject: '',
            body: ''
        };
    }

    load_video() {
        if (!this.apiLoaded) {
            // This code loads the IFrame Player API code asynchronously, according to the instructions at
            // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);
            this.apiLoaded = true;
        }
        this.show_video = !this.show_video;
    }

    open(index: number): void {
        this.lightbox.open(this.gallery, index);
    }

    scroll(url: string) {
        this.cur_menu = url;
        this.mmenu_visible = false;
    }

    close(): void {
        this.lightbox.close();
    }
}

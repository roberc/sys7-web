import {AfterContentInit, Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
// import {NgwWowService} from 'ngx-wow';
import {DOCUMENT} from '@angular/common';
import {PageScrollService} from './soft/page-scroll/ngx-page-scroll.service';
import {Lightbox} from './soft/lightbox/lightbox.service';
import {LightboxConfig} from './soft/lightbox/lightbox-config.service';

declare const WOW;

/*
https://demos.onepagelove.com/html/namari/
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy, AfterContentInit {
    @ViewChild('menu', {static: true}) menu: ElementRef = new ElementRef<any>(null);
    @ViewChild('mobile', {static: true}) mobile: ElementRef = new ElementRef<any>(null);

    wowSubscription: any = null;
    show_site = false;
    mmenu_visible = false;
    show_bubbles = true;

    gallery: any = [];
    apiLoaded = false;
    show_video = false;

    cur_menu = 'banner';

    constructor(private router: Router,
                private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any,
                private lightbox: Lightbox, private lightboxConfig: LightboxConfig){
        (new WOW).init();
      /*  this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(event => {
            // Reload WoW animations when done navigating to page,
            // but you are free to call it whenever/wherever you like
            this.wowService.init();
            console.log(event);
        });*/

        lightboxConfig.centerVertically = true;
        lightboxConfig.fadeDuration = 0.4;
        lightboxConfig.resizeDuration = 0.2;
        // lightboxConfig.showZoom = true;

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
        }
    }
    ngAfterContentInit() {
        this.mobile.nativeElement.innerHTML = this.menu.nativeElement.innerHTML;
        setTimeout(() => this.show_site = true, 200);
        setTimeout(() => this.show_bubbles = false, 2000);
    }
    show_mobile_menu() {
        this.mmenu_visible = !this.mmenu_visible;
    }
    ngOnInit() {
        this.pageScrollService.scroll({
            document: this.document,
            scrollTarget: '.theEnd',
        });
        // you can subscribe to WOW observable to react when an element is revealed
/*
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
        (item:HTMLElement) => {
            // do whatever you want with revealed element
            console.log(item, this);
        });
*/
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
        // open lightbox
        this.lightbox.open(this.gallery, index);
    }

    scroll(url: string) {
        this.cur_menu = url;
    }
    close(): void {
        // close lightbox programmatically
        this.lightbox.close();
    }
    ngOnDestroy() {
        // unsubscribe (if necessary) to WOW observable to prevent memory leaks
        this.wowSubscription.unsubscribe();
    }
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ParallaxDirective} from './soft/parallax.directive';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {StickyNavDirective} from './soft/stickynav.directive';
import {NgxPageScrollDirective} from './soft/page-scroll/ngx-page-scroll.directive';
import {NgxPageScrollCoreModule} from './soft/page-scroll/ngx-page-scroll-core.module';
import {PageScrollService} from './soft/page-scroll/ngx-page-scroll.service';
import {LightboxModule} from './soft/lightbox/lightbox.module';
import {Lightbox} from './soft/lightbox/lightbox.service';
import {LightboxConfig} from './soft/lightbox/lightbox-config.service';
import {LightboxEvent, LightboxWindowRef} from './soft/lightbox/lightbox-event.service';
import {NgwWowModule} from 'ngx-wow';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {GoogleMapsModule} from '@angular/google-maps';
import {NgxImageSwiperModule} from './soft/ngx-image-swiper/ngx-image-swiper.module';

@NgModule({
    declarations: [
        AppComponent,
        ParallaxDirective,
        StickyNavDirective,
        NgxPageScrollDirective
    ],
    imports: [
        FormsModule,
        HttpClientModule,
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        AppRoutingModule,
        NgwWowModule,
        LightboxModule,
        YouTubePlayerModule,
        NgxPageScrollCoreModule,
        GoogleMapsModule,
        HttpClientJsonpModule,
        NgxImageSwiperModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    providers: [PageScrollService, Lightbox, LightboxConfig, LightboxEvent, LightboxWindowRef],
    bootstrap: [AppComponent]
})
export class AppModule {
}

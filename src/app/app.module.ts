import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgwWowModule } from 'ngx-wow';
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

@NgModule({
    declarations: [
        AppComponent,
        ParallaxDirective,
        StickyNavDirective,
        NgxPageScrollDirective
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        AppRoutingModule,
        NgwWowModule,
        LightboxModule,
        YouTubePlayerModule,
        NgxPageScrollCoreModule
    ],
    providers: [PageScrollService, Lightbox, LightboxConfig, LightboxEvent, LightboxWindowRef],
    bootstrap: [AppComponent]
})
export class AppModule { }

import {Directive, Input, Renderer2, ElementRef, OnInit, OnDestroy, Inject, PLATFORM_ID} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';

@Directive({
    selector: '[ngStickyNav]'
})

export class StickyNavDirective implements OnInit, OnDestroy {
    @Input('stickyClass') stickyClass: string = '';
    @Input() stickyEnabled: boolean = true;
    private originalPosition: number = 0;
    private lastScroll: number = 0;
    private isSticky: boolean = false;
    private scrollSubscription: Subscription | null = null;
    private wrapper: HTMLElement | undefined;

    constructor(private elementRef: ElementRef, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {
    }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.scrollSubscription = fromEvent(window, 'scroll').subscribe(() => this.manageScrollEvent());
        }
    }

    ngOnDestroy() {
        if (this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
        }
    }

    private manageScrollEvent(): void {
        const scroll = window.pageYOffset;
        if (
            this.stickyEnabled &&
            scroll > this.lastScroll &&
            !this.isSticky &&
            scroll >= this.elementRef.nativeElement.offsetTop
        ) {
            this.setSticky();
        } else if (scroll < this.lastScroll && this.isSticky && scroll <= this.originalPosition) {
            this.unsetSticky();
        }
        this.lastScroll = scroll;
    }

    private setSticky(): void {
        this.isSticky = true;
        this.originalPosition = this.elementRef.nativeElement.offsetTop;
        this.wrapper = this.elementRef.nativeElement.cloneNode(true);
        this.removeIds();
        this.setStyle('position', 'fixed');
        this.setStyle('top', '0');
        this.addClass();
        this.renderer.setStyle(this.wrapper, 'visibility', 'hidden');
        this.elementRef.nativeElement.parentElement.insertBefore(this.wrapper, this.elementRef.nativeElement);
    }

    private removeIds() {
        if (!this.wrapper) {
            return;
        }
        const {height: initHeight, width: initWidth} = this.wrapper.getBoundingClientRect();
        Array.from(this.wrapper.querySelectorAll('*')).forEach(el => this.renderer.removeAttribute(el, 'id'));
        const {height: postHeight, width: postWidth} = this.wrapper.getBoundingClientRect();
        if (initWidth !== postWidth || initHeight !== postHeight) {
            throw new Error(`Size mismatch between sticky element and clone - please ensure you aren't using IDs for styling.`);
        }
    }

    private unsetSticky(): void {
        this.isSticky = false;
        this.originalPosition = 0;
        this.elementRef.nativeElement.parentElement.removeChild(this.wrapper);
        this.setStyle('position', 'static');
        this.removeClass();
    }

    private setStyle(key: string, value: string): void {
        this.renderer.setStyle(this.elementRef.nativeElement, key, value);
    }

    private addClass(): void {
        this.renderer.addClass(this.elementRef.nativeElement, this.stickyClass);
    }

    private removeClass(): void {
        this.renderer.removeClass(this.elementRef.nativeElement, this.stickyClass);
    }
}

import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[parallax]'
})
export class ParallaxDirective {
    @Input('ratio') parallaxRatio : number = 1
    initialTop : number = 0

    constructor(private eleRef : ElementRef) {
        if (this.eleRef.nativeElement?.getBoundingClientRect) {
            this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
        }
    }

    @HostListener("window:scroll", ["$event"])
    onWindowScroll(){
        if (this.eleRef.nativeElement) {
            this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
        }
    }
}

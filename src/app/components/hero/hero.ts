import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private timer: any;
  isTransitioning = false;

  slides = [
    {
      welcome: 'Committed to Helping You',
      title: 'Expert Legal Advice You Can Trust',
      desc: 'Providing high-quality legal representation for over 15 years. Specializing in Family, Civil, and Criminal Law across all major Indian courts.',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      welcome: 'Justice for All',
      title: 'Voice of Justice: Smarter & Better',
      desc: 'Our mission is to provide accessible, efficient, and digitalized legal solutions tailored to the modern world.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      welcome: 'Your Legal Partner',
      title: 'Professional Integrity & Excellence',
      desc: 'Dedicated to upholding the highest standards of the legal profession while ensuring result-oriented representation for every client.',
      image: 'https://images.unsplash.com/photo-1453945619913-79ec89a82c51?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.initAutoPlay();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  initAutoPlay() {
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.nextSlide(true);
    }, 4000);
  }

  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  nextSlide(isAuto = false) {
    if (this.isTransitioning) return;
    
    this.executeTransition((this.currentSlide + 1) % this.slides.length);
  }

  prevSlide() {
    if (this.isTransitioning) return;
    
    this.executeTransition((this.currentSlide - 1 + this.slides.length) % this.slides.length);
  }

  goToSlide(index: number) {
    if (this.currentSlide === index || this.isTransitioning) return;
    
    this.executeTransition(index);
  }

  private executeTransition(newIndex: number) {
    this.isTransitioning = true;
    this.clearTimer();
    
    this.currentSlide = newIndex;
    this.cdr.detectChanges(); // Force update

    // Locked for the duration of the CSS transition (600ms)
    setTimeout(() => {
      this.isTransitioning = false;
      this.initAutoPlay(); // Re-schedule next rotation
      this.cdr.detectChanges();
    }, 700);
  }
}

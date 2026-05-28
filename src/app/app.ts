import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ServicesComponent } from './components/services/services';
import { TeamComponent } from './components/team/team';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { DisclaimerComponent } from './components/disclaimer/disclaimer';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { FloatingContactComponent } from './components/floating-contact/floating-contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    DisclaimerComponent,
    TestimonialsComponent,
    FloatingContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'adv-jagdamba';
}

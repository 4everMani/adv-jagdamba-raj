import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disclaimer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disclaimer.html',
  styleUrl: './disclaimer.css'
})
export class DisclaimerComponent {
  isVisible = true;

  accept() {
    this.isVisible = false;
    // In a real app, you might save this in localStorage
  }
}

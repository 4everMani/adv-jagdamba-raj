import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    customService: '',
    message: ''
  };

  // Replace these with your actual EmailJS credentials
  private readonly SERVICE_ID = 'YOUR_SERVICE_ID';
  private readonly TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  private readonly PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  onServiceChange() {
    if (this.formData.service !== 'Other') {
      this.formData.customService = '';
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    
    const selectedService = this.formData.service === 'Other' ? this.formData.customService : this.formData.service;
    
    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      phone_number: this.formData.phone,
      service_requested: selectedService,
      message: this.formData.message
    };

    // 1. Send Email using EmailJS
    emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams, this.PUBLIC_KEY)
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
      }, (err) => {
        console.error('Failed to send email...', err);
      });

    // 2. Prepare WhatsApp Notification
    const notificationText = `New Appointment Request:\nName: ${this.formData.name}\nEmail: ${this.formData.email}\nPhone: ${this.formData.phone}\nService: ${selectedService}\nMessage: ${this.formData.message}`;
    const encodedMessage = encodeURIComponent(notificationText);
    const whatsappUrl = `https://wa.me/919999988888?text=${encodedMessage}`;
    
    alert('Your request has been sent! Redirecting you to WhatsApp for instant confirmation.');
    window.open(whatsappUrl, '_blank');

    // Reset Form
    this.formData = {
      name: '',
      email: '',
      phone: '',
      service: '',
      customService: '',
      message: ''
    };
  }
}

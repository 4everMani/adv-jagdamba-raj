import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent implements OnInit {
  formData = {
    name: '',
    district: '',
    city: '',
    state: '',
    phone: '',
    service: '',
    customService: '',
    message: ''
  };

  // EmailJS credentials are loaded from environment configuration
  private SERVICE_ID = '';
  private TEMPLATE_ID = '';
  private PUBLIC_KEY = '';

  ngOnInit(): void {
    this.SERVICE_ID = environment.emailjs.serviceId;
    this.TEMPLATE_ID = environment.emailjs.templateId;
    this.PUBLIC_KEY = environment.emailjs.publicKey;

    if (this.PUBLIC_KEY) {
      try {
        emailjs.init(this.PUBLIC_KEY);
      } catch (e) {
        console.warn('EmailJS initialization failed', e);
      }
    }
  }

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
      from_district: this.formData.district,
      from_state: this.formData.state,
      phone_number: this.formData.phone,
      service_requested: selectedService,
      message: this.formData.message
    };

    // 1. Send Email using EmailJS
    // EmailJS is initialized in ngOnInit; no need to pass public key to send()
    emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams)
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
      }, (err) => {
        console.error('Failed to send email...', err);
      });

    // 2. Prepare WhatsApp Notification
    const notificationText = `New Appointment Request:\nName: ${this.formData.name}\nDistrict: ${this.formData.district}\nState: ${this.formData.state}\nPhone: ${this.formData.phone}\nService: ${selectedService}\nMessage: ${this.formData.message}`;
    const encodedMessage = encodeURIComponent(notificationText);
    const whatsappUrl = `https://wa.me/919999988888?text=${encodedMessage}`;
    
    alert('Your request has been sent! Redirecting you to WhatsApp for instant confirmation.');
    window.open(whatsappUrl, '_blank');

    // Reset Form
    this.formData = {
      name: '',
      district: '',
      city: '',
      state: '',
      phone: '',
      service: '',
      customService: '',
      message: ''
    };
  }
}

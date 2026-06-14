import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = {
    instagram: 'https://www.instagram.com/alimentabolivia',
    facebook: 'https://www.facebook.com/alimentabolivia',
    tiktok: 'https://www.tiktok.com/@alimentabolivia'
  };

  contactInfo = {
    phone: '+591 00000000',
    email: 'contacto@alimenta.com.bo',
    address: 'Dirección del centro, Ciudad, Bolivia'
  };
}

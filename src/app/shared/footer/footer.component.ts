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
    instagram: 'https://www.instagram.com/alimenta.bol?igsh=am82MzF6aW9xcjln',
    facebook: 'https://www.facebook.com/share/1LCzxk5mQx/',
    tiktok: 'https://www.tiktok.com/@alimenta.bol?_r=1&_t=ZS-97UYWM1TIE0'
  };
}

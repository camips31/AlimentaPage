import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a 
      href="https://wa.me/59177731818?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20Alimenta" 
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-float"
      aria-label="Contactar por WhatsApp">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
        <path d="M27.281 4.65C24.563 1.906 20.906 0.406 17 0.406c-7.719 0-14 6.25-14 13.938 0 2.469 0.656 4.875 1.875 7l-2 7.281 7.469-1.969c2.031 1.094 4.313 1.687 6.656 1.687 7.719 0 14-6.25 14-13.969 0-3.719-1.469-7.219-4.125-9.813zM17 25.406c-2.094 0-4.156-0.563-5.938-1.625l-0.438-0.25-4.469 1.188 1.219-4.375-0.281-0.438c-1.156-1.875-1.781-4-1.781-6.156 0-6.406 5.219-11.625 11.656-11.625 3.125 0 6.031 1.219 8.219 3.438 2.188 2.188 3.406 5.094 3.406 8.188 0.031 6.438-5.188 11.656-11.594 11.656zM23.594 19.344c-0.344-0.188-2.094-1.031-2.406-1.156-0.344-0.094-0.594-0.156-0.844 0.156-0.25 0.344-0.969 1.156-1.188 1.406-0.219 0.25-0.438 0.281-0.781 0.094-0.344-0.188-1.469-0.531-2.781-1.719-1.031-0.906-1.719-2.031-1.906-2.375-0.219-0.344-0.031-0.531 0.156-0.719 0.156-0.156 0.344-0.406 0.531-0.625 0.156-0.188 0.219-0.344 0.344-0.563 0.094-0.25 0.031-0.469-0.031-0.656-0.063-0.188-0.844-2.031-1.156-2.781-0.281-0.719-0.594-0.625-0.844-0.625-0.219 0-0.469-0.031-0.719-0.031s-0.656 0.094-1 0.438c-0.344 0.344-1.281 1.25-1.281 3.063s1.313 3.531 1.5 3.781c0.188 0.25 2.469 3.781 6.031 5.281 0.844 0.375 1.5 0.594 2.031 0.781 0.844 0.25 1.625 0.219 2.219 0.125 0.688-0.094 2.094-0.844 2.375-1.688 0.281-0.844 0.281-1.563 0.219-1.688-0.094-0.156-0.344-0.25-0.688-0.438z"/>
      </svg>
    </a>
  `,
  styles: [`
    .whatsapp-float {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #25D366;
      color: white;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
      z-index: 1000;
      transition: all 0.3s ease;
      animation: pulse 2s infinite;
    }

    .whatsapp-float:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
      }
      50% {
        box-shadow: 0 4px 20px rgba(37, 211, 102, 0.8);
      }
      100% {
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
      }
    }

    @media (max-width: 768px) {
      .whatsapp-float {
        width: 50px;
        height: 50px;
        bottom: 15px;
        right: 15px;
      }

      .whatsapp-float svg {
        width: 26px;
        height: 26px;
      }
    }
  `]
})
export class WhatsappButtonComponent {}

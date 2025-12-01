import {
  Component,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'ess',
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
})
export class DashboardLayoutComponent {


  webApps = [
    { name: 'Yo-Seeds Platform', link: 'https://example1.com', desc: 'eCommerce & booking system' },
    { name: 'Elite Portal', link: 'https://example2.com', desc: 'subscription-based healthcare system' },
    { name: 'Rasas Dashboard', link: 'https://example3.com', desc: 'medical analytics and CMS' },
    { name: 'ClinicPro', link: 'https://example4.com', desc: 'doctor and patient management' },
    { name: 'BookEase', link: 'https://example5.com', desc: 'appointment booking system' },
    { name: 'TradeZone', link: 'https://example6.com', desc: 'B2B marketplace' },
    { name: 'ChatSync', link: 'https://example7.com', desc: 'real-time chat & video call platform' },
  ];

  landingPages = [
    { name: 'Khatb - Wedding Planner', link: 'https://example8.com' },
    { name: 'MediConnect - Telehealth', link: 'https://example9.com' },
    { name: 'TechNova Conference 2025', link: 'https://example10.com' },
    { name: 'AdWave Marketing', link: 'https://example11.com' },
    { name: 'FitTrack Pro', link: 'https://example12.com' },
    { name: 'GreenCore Energy', link: 'https://example13.com' },
  ];

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    // Cursor sparkle trail listener
    this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
      const dot = this.renderer.createElement('div');
      this.renderer.addClass(dot, 'trail-dot');
      this.renderer.setStyle(dot, 'left', `${e.pageX}px`);
      this.renderer.setStyle(dot, 'top', `${e.pageY}px`);
      this.renderer.appendChild(document.body, dot);
      setTimeout(() => dot.remove(), 800);
    });
  }

  alertClick() {
    alert("It's 1999. No auto-scroll. you scroll down manually like a true gent ... or lady.");
  }

}

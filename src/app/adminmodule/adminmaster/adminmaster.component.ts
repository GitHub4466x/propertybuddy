import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminmaster',
  standalone: true,
  imports: [ RouterOutlet],
  templateUrl: './adminmaster.component.html',
  styleUrl: './adminmaster.component.css'
})
export class AdminmasterComponent {
  
  private scripts: string[] = [
    'assets/js/vendors/jquery-3.6.0.min.js',
    'assets/js/vendors/bootstrap.bundle.min.js',
    'assets/js/vendors/select2.min.js',
    'assets/js/vendors/perfect-scrollbar.js',
    'assets/js/vendors/jquery.fullscreen.min.js',
    'assets/js/vendors/chart.js',
    'assets/js/main.js',
    'assets/js/custom-chart.js'
  ];

  private stylesheets: string[] = [
    'assets/css/main.css'
  ];

  private addedScripts: HTMLScriptElement[] = [];
  private addedStyles: HTMLLinkElement[] = [];

  constructor() {}

  ngOnInit() {
    if (typeof document !== 'undefined') {
      this.addStyles(this.stylesheets);
      this.addScripts(this.scripts);
    }
  }

  ngOnDestroy() {
    this.removeStyles();
    this.removeScripts();
  }

  private addStyles(styles: string[]) {
    styles.forEach(href => {
      const linkElement = this.addStyle(href);
      if (linkElement) {
        this.addedStyles.push(linkElement);
      }
    });
  }

  private addStyle(href: string): HTMLLinkElement | null {
    // Check if the stylesheet is already added
    if (document.querySelector(`link[href="${href}"]`)) {
      return null;
    }

    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = href;
    document.head.appendChild(linkElement);
    return linkElement;
  }

  private removeStyles() {
    this.addedStyles.forEach(link => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    });
    this.addedStyles = [];
  }

  private addScripts(scripts: string[]) {
    scripts.forEach(src => {
      const scriptElement = this.addScript(src);
      if (scriptElement) {
        this.addedScripts.push(scriptElement);
      }
    });
  }

  private addScript(src: string): HTMLScriptElement | null {
    // Check if the script is already added
    if (document.querySelector(`script[src="${src}"]`)) {
      return null;
    }

    const scriptElement = document.createElement('script');
    scriptElement.src = src;
    scriptElement.async = true; // Optional: Load asynchronously
    scriptElement.defer = true; // Optional: Defer execution
    document.body.appendChild(scriptElement);
    return scriptElement;
  }

  private removeScripts() {
    this.addedScripts.forEach(script => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    });
    this.addedScripts = [];
  }

}

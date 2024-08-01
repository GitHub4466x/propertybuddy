import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-userhome',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent {
  private stylesheets: string[] = [
    'css/font-icons.css',
    'css/plugins.css',
    'css/style.css',
    'css/responsive.css'
  ];

  private scripts: string[] = [
    'js/plugins.js',
    '/js/main.js'
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
    // scriptElement.async = true; // Optional: Load asynchronously
    // scriptElement.defer = true; // Optional: Defer execution
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

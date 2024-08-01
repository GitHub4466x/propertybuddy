import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,RouterLink
  ],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
}

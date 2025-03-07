import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {Checkbox} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, Checkbox, FormsModule, GalleriaModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'angJavaJenkins';
  checked: any;
  pizza: any;
  images = '';

  prev() {

  }

  next() {

  }
}

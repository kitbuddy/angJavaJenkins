import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';
import {BasicComponentComponent} from './basic-component/basic-component.component';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, FormsModule, GalleriaModule, BasicComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {

}

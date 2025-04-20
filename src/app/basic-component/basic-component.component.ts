import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-basic-component',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './basic-component.component.html',
  styleUrl: './basic-component.component.scss',
})
export class BasicComponentComponent {

}

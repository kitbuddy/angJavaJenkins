import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {Checkbox} from "primeng/checkbox";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-basic-component',
  imports: [
    FormsModule
  ],
  templateUrl: './basic-component.component.html',
  styleUrl: './basic-component.component.scss'
})
export class BasicComponentComponent {
}

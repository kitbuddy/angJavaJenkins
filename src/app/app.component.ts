import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';
import {BasicComponentComponent} from './basic-component/basic-component.component';
import {DataTableComponent} from './data-table/data-table.component';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, FormsModule, GalleriaModule, BasicComponentComponent, DataTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  showDataTable = false;


  showBasicComponent() {
    this.showDataTable = !this.showDataTable;
  }
}

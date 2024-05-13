import { Component } from '@angular/core';
import { Comp2Component } from './comp2/comp2.component';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [Comp2Component],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {
  myname: string = "mohamed";
  fullname: string = "mohamed mostafa";

  myfun(name: string) {
    this.fullname = name;
  }

}

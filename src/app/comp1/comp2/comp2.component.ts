import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
  @Input()
    fname: string="ebrahem";


  @Output() changemyInput : EventEmitter<string> = new EventEmitter<string>();

  save(name:string) {
    this.changemyInput.emit(name);
  }

}

import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-initial-inputs',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './initial-inputs.component.html',
  styleUrl: './initial-inputs.component.css'
})
export class InitialInputsComponent {
  totTickets_input:number;
  totTickets_input_dataType:boolean;

  constructor(){
    this.totTickets_input = 0;
    this.totTickets_input_dataType = false;
  }
  testing_get_inputs(){
    alert(`"Entered value is: " ${this.totTickets_input}`);
  }
  input_validator(){
    if(typeof this.totTickets_input != 'number'){
      this.totTickets_input_dataType = true;
    }
    else{
      this.totTickets_input_dataType = false;
    }
  }

}

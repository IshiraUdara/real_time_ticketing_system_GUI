import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-initial-inputs',
  imports: [FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  templateUrl: './initial-inputs.component.html',
  styleUrl: './initial-inputs.component.css'
})
export class InitialInputsComponent implements OnInit {
  model: Entry_formViewModel = {
    totTickets_input: 0,
    maxCapacity_input: 0,
    releaseRate_input: 0,
    retrievalRate_input: 0
  }

  constructor(private http: HttpClient) {
    
  }
  ngOnInit(): void {
    
  }
  sumbitButton(){
    // alert(this.totTickets_input);
  }
  sendInitialInputs(): void {
    let url = 'http://localhost:8080/api/entry_form';
    
  }
  

}
export interface Entry_formViewModel {
  totTickets_input: number;
  maxCapacity_input: number;
  releaseRate_input: number;
  retrievalRate_input: number;
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  title = 'remoteapp1';
  insuranceByUser: any= {};
  insurance: any[] = [];
  selectedPolicy:number=0;
  constructor(private router:Router) {}
   ngOnInit() {
    this.insurance = JSON.parse(localStorage.getItem('insurance_details') || '[]');
    this.selectedPolicy = JSON.parse(localStorage.getItem('selectedPolicy') || '0');
    console.log(this.insurance)
    for(let i=0; i<this.insurance.length; i++) {
      if(this.insurance[i].policyNo == this.selectedPolicy) {
        this.insuranceByUser = this.insurance[i];
      }
    }

  }
  
  payPremium() {
    this.router.navigate(['/premium']);
  }
}

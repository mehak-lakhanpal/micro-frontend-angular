import { Component, OnInit } from '@angular/core';
import { CorsWorker as Worker } from '../utils/cors-worker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  insuranceByUser: any= {};
  insurance: any[] = [];
  selectedPolicy:number=0;
  totalPremium:number=0;
  isPaid:boolean=false;
  constructor() {}
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
  pay(){
    this.isPaid=true;
  }
  async calculate(){
     // Create a new
     const worker =  await (new Worker(
      new URL('../utils/web.worker', import.meta.url),
  )).createWorker();
     console.log(worker)
     console.log(this.insuranceByUser)
     worker.onmessage = ({ data }) => {
      this.totalPremium=data;
       console.log(`page got message: ${data}`);
     };
     worker.postMessage(this.insuranceByUser);
  }
}

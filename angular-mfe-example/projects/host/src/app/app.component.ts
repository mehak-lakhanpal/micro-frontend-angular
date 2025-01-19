import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(){}
  // title = 'host';
  // insurance: any[] = [{ name: "Dinesh", age: "40", policyNo: 156872, sumInsured: 300000, used:0, buyDate:"20-June-2024", validTill:"20-June-2025", status:"Active" },{ name: "Mahir", age: "45", policyNo: 156872, sumInsured: 300000, used:150000, buyDate:"20-June-2024", validTill:"20-June-2025", status:"Active" }];
  // constructor(private router: Router){}
  // ngOnInit(){
  //   if(localStorage.getItem('insurance_details')==null) {
  //     localStorage.setItem('insurance_details',JSON.stringify(this.insurance));
  //   }
  // }
  // viewDetails(data:any){
  //   localStorage.setItem('selectedPolicy',data);
  //   this.router.navigate(['/mfe']);
  // }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  title = 'host';
  insurance: any[] = [{ name: "Policy 1", policyNo: 156871, status:"Active", cover:1000000 ,premiumBaseAmount:10000,gst:3,discount:1},{ name: "Policy 2", policyNo: 156872, status:"Active", cover:500000 ,premiumBaseAmount:9000,gst:3,discount:1}];
  constructor(private router: Router){}
  ngOnInit(){
    if(localStorage.getItem('insurance_details')==null) {
      localStorage.setItem('insurance_details',JSON.stringify(this.insurance));
    }
  }
  viewDetails(data:any){
    localStorage.setItem('selectedPolicy',data);
    this.router.navigate(['/insurance-details']);
  }

}

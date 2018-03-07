import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  address: any = {
    name: '',
    address1: '',
    address2: '',
    city: '',
    zip: '',
    state: ''
  };

  adressPage: any = true;
  modal_opened: boolean = true;
  
  is_readonly: boolean = true;
  error;
  //signupForm: FormGroup;
  constructor() { 
    

  }

  ngOnInit() {
  }

 
  showAddress() {
    this.address.index = null;
    this.address.name = "";
    this.address.address1 = "";
    this.address.address2 = "";
    this.address.city = "";
    this.address.state = "";
    this.address.zip = "";
    this.adressPage = !this.adressPage;
    this.modal_opened = !this.modal_opened;
  }

  hideAddressModal() {
    this.adressPage = !this.adressPage;
    this.modal_opened = !this.modal_opened;
  }
  hideError() {
    this.error = null;
  }

  makeEditable() {
    this.is_readonly = false;
    // this.is_readonly = !this.is_readonly
  }
 

}

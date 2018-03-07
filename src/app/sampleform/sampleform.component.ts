import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.css']
})
export class SampleformComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.signupForm  = this.fb.group({
      email: ['',[Validators.required,
                  Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mobile: ['', Validators.required],
      name: ['', Validators.required]
  })
  }
  

}

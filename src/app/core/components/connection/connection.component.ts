import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Userservice } from '../../Userdata/Userservice';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.scss'
})
export class ConnectionComponent implements OnInit{



  usersalesForm!: FormGroup;
  
  constructor(private formBuilder:FormBuilder, private userservis: Userservice){
  } 
  ngOnInit(): void {
    this.usersalesForm=this.formBuilder.group({
      namee: [null],
      email: [null],
      passwor: [null],
      role: [null]
    }  
    );
    throw new Error('Method not implemented.');
  }
  onSubmitForm() {

    console.log('hear i am');
   console.log(this.usersalesForm.value);
   
    }
}

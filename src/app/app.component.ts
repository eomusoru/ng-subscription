import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  @ViewChild('f') formObj: NgForm;

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';
  submitedObject = false;

  subscriptionObj = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit(){
    this.subscriptionObj.email = this.formObj.value.email;
    this.subscriptionObj.subscription = this.formObj.value.subscription;
    this.subscriptionObj.password = this.formObj.value.password;
    this.formObj.reset();
    this.selectedSubscription = 'Advanced';
    this.submitedObject = true;
  }
}
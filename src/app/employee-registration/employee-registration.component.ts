import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {
  employee = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };

  onSubmit() {
    console.log(this.employee);
  }
}

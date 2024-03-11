import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nm = '';
  em = '';
  ph = '';
  add = '';
  qualification = [{
    col: '',
    deg: '',
    yr: ''
  }];
  showHeading: boolean = true;
  submitted : boolean = false;

  addQualification(){
    this.qualification.push({col:'', deg:'', yr: ''}); 
  }

  submit(){
    this.submitted = true;
    this.showHeading = false;
  }

  edit(){
    this.submitted = false;
    this.showHeading = true;
  }
}

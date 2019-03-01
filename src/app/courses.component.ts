import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
            
            <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
        `
})

export class CoursesComponent{
    email = "me@exam.com";

    onKeyUp(){
        console.log(this.email);
    }

    // onDivClicked(){
    //     console.log("Div was clicked!");
    // }
    // onSave($event){
    //     $event.stopPropagation();
    //     console.log("Button was clicked!", $event);
    // }
    // isActive = true;

    //title = "List of courses";
    // colSpan = 2;
    // imageUrl = "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
    // courses;

    // constructor(service: CoursesService){
    //     this.courses = service.getCourses();
    // }
    
}
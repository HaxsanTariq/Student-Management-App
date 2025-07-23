import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  template: `
    <div *ngFor="let student of students">
      {{ student.name }} - Age: {{ student.age }}
    </div>
  `
})
export class StudentListComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => this.students = data);
  }
}

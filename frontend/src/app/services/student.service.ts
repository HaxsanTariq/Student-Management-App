import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private api = 'http://localhost:5000/api/student';

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<any[]>(this.api);
  }

  addStudent(student: any) {
    return this.http.post(this.api, student);
  }

  updateStudent(id: number, student: any) {
    return this.http.put(`${this.api}/${id}`, student);
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}

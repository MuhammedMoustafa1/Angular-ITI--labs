import { Injectable } from '@angular/core';
import { Student } from '../_Models/student'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = "http://localhost:8080/students/"

  constructor(private http:HttpClient) {

  }
  students: Student[] = [
    new Student(1, "mostafa", 30),
    new Student(2, "ahmed", 26),
    new Student(3, "ali", 21),
    new Student(4, "mohamed", 25),
    new Student(5, "hassan", 29),
    new Student(6, "khaled", 20),
  ]
  getAll() {
    return this.http.get<Student[]>(this.baseUrl);
  }

  getById(id:number){
    // call backend
    return this.http.get<Student>(this.baseUrl+id);
  }
  add(std:Student){
    return this.http.post<Student>(this.baseUrl,std);

  }
  update(std:Student){
    return this.http.put<Student>(this.baseUrl+std._id,std)
  }
  delete(id: number) {
  return this.http.delete<void>(this.baseUrl + id);
}
  // getById(id:number):Student | null
  // {
  //   let std:Student|null = null;
  //   for(let index =0 ; index<this.students.length;index++){
  //     if (this.students[index].id == id){
  //       std = this.students[index];
  //       break;
  //     }
  //   }
  //   return std;
  // }
  getStudent(s: Student) {
    return s;
  }
  addStudent(nstd: Student) {
    this.students.push(new Student(nstd._id, nstd.name, nstd.age));
  }
  deletestudent(id: number) {
    const confirmDelete = confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      this.students = this.students.filter(item => item._id !== id);
      // Optionally, you can also perform any other actions related to deletion here
    }
  }
    updateStudent(updatedStudent: Student): void {
  const index = this.students.findIndex(student => student._id === updatedStudent._id);
  if (index !== -1) {
    this.students[index] = updatedStudent;
  }
}

}

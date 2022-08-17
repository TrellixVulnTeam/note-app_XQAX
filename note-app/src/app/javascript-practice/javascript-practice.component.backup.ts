// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-javascript-practice',
//   templateUrl: './javascript-practice.component.html',
//   styleUrls: ['./javascript-practice.component.scss']
// })
// export class JavascriptPracticeComponent implements OnInit {
//
//   constructor() { }
//
//   pageTitle: String = 'JavaScript Practice';
//
//   students: any[] = [
//     {firstname: "Max", lastname: "Mustermann"},
//     {firstname: "Tanja", lastname: "Maus"},
//     {firstname: "Hans", lastname: "Meier"}
//   ]
//
//   ngOnInit(): void {
//     const newStudents = this.students.map((student, index) => {
//       return `${index + 1}. Student: ${student.firstname} ${student.lastname}`;
//       }
//     );
//
//     console.log(newStudents);
//
//     const courses = [
//       ["Christian", "Annika"], // Kurs 1 mit 2 Teilnehmern
//       ["Julian", "Lisa", "Tobias"] // Kurs 2 mit 3 Teilnehmern
//     ]
//
//     // Function declaration
// /*    function getSmallestCourse() {
//       if (courses[0].length > courses[1].length) {
//         return 0;
//       } else {
//         return 1;
//       }
//     }*/
//
//     // Function Expression
//     /*const getSmallestCourse = function() {
//       if (courses[0].length > courses[1].length) {
//         return 0;
//       } else {
//         return 1;
//       }
//     }*/
//
//     const getSmallestCourse = () => courses[0].length > courses[1].length ? 0 : 1;
//
//     const addStudent = (name: string): string => {
//       const smallestCourse = getSmallestCourse()
//       courses[smallestCourse].push(name);
//       return 'Student added';
//     }
//
//     /*function addStudent(name: any) {
//       const smallestCourse = getSmallestCourse()
//       courses[smallestCourse].push(name);
//     }*/
//
//     console.log(getSmallestCourse());
//     console.log(addStudent('Tanja'));
//     console.log(courses);
//
//   }
//
//
// }

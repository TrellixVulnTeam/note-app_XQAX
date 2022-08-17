import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-javascript-practice',
  templateUrl: './javascript-practice.component.html',
  styleUrls: ['./javascript-practice.component.scss']
})

export class JavascriptPracticeComponent implements OnInit {
  pageTitle: String = 'JavaScript Practice';

  studentModule = {
    students: [
      {
        firstname: "Max",
        lastname: "Mustermann"
      }

    ],
    addStudent(firstname: any, lastname: any) {
      this.students.push(
        {
          firstname: firstname,
          lastname: lastname
        }

      )
    },
    printStudents() {
      for (let student of this.students) {
        console.log(this.getStudentName(student.firstname, student.lastname))
      }
    },
    getStudentName(firstname: any, lastname: any) {
      return firstname + " " + lastname;
    }
  }

  constructor() {
  }


  ngOnInit(): void {
    this.studentModule.addStudent("Erika", "Mustermann");
    this.studentModule.addStudent("Hans", "Meier");
    this.studentModule.printStudents();
  }
}

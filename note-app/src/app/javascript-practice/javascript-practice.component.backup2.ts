import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-javascript-practice',
  templateUrl: './javascript-practice.component.html',
  styleUrls: ['./javascript-practice.component.scss']
})
export class JavascriptPracticeComponent implements OnInit {

  constructor() {
  }

  /**/
  pageTitle: String = 'JavaScript Practice';

  /*  students: any[] = [
      {firstname: "Max", lastname: "Mustermann"},
      {
        firstname: "Hans", lastname: [
          {
            id: 122,
            text: "aasfdsf"
          },
          {
            id: 444,
            text: [3, 5]
          }
        ]
      }
    ]*/


  ngOnInit(): void {
    /*  console.log(this.students);
      console.log(typeof this.students);
      console.log(this.students[1].lastname[1].text[0]);
      // console.log(`${this.students[1].lastname[0].id} Hallo Blblall`)

      const mappingTest = this.students.map(() => {
        return `${this.students[1].lastname[0].id} Hallo Blblall ${this.students[1].lastname[0].text}`;
      });
      console.log(mappingTest);*/

    /* Wir nach 1 Sekunde ausgeführt, wenn fertig dann wird unten das erste then ausgeführt */
    /*    const p = new Promise(((resolve, reject) => {
          setTimeout(() => {
            resolve("Hallo Welt")
          }, 1000)
        }))

        p
          .then((value) => {
            // gibt ein neus Promise zurück, wenn das resolved ist kann das zweite then getartet werden
            console.log("Value 1: ", value);

            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve("Hallo Welt 2")
              }, 1000)
            })
          })
          .then((value) => {
            console.log("Value 2: ", value)
          })*/

    const LANGUAGE_DE = [
      "hallo",
      "heute",
      "sprachkurs",
      "willkommen",
      "mikrofon",
      "und"
    ]

    const LANGUAGE_EN = [
      "hello",
      "today",
      "language course",
      "welcome",
      "microphone",
      "and"
    ]

    let DE_TO_EN: any = {};

    /*    for (let i = 0; i < LANGUAGE_EN.length; i++ ) {
          let wordDe = LANGUAGE_DE[i];
          let wordEn = LANGUAGE_EN[i];

          DE_TO_EN[wordDe] = wordEn;
        }*/

    for (let i in LANGUAGE_EN) {
      let wordDe = LANGUAGE_DE[i];
      let wordEn = LANGUAGE_EN[i];

      DE_TO_EN[wordDe] = wordEn;
    }

    // console.log(DE_TO_EN);

    const students: Array<any> = [
      {firstname: "Max", lastname: "Mustermann", age: 21},
      {firstname: "Laura", lastname: "Müller", age: 25},
      {firstname: "Julia", lastname: "Schreiber", age: 30},
      {firstname: "Tobias", lastname: "Lieb", age: 19}
    ]

    const average = (() => {
      let ageSum = 0;
      let studentsWithAge = 0;

      for (let student of students) {
        if (student.age) {
          ageSum += student.age;
          studentsWithAge++;
        }
      }

      /*for (let i in students) {
        ageSum = students[i].age + ageSum;
      }*/

      console.log(ageSum);

      return ageSum / studentsWithAge;
    })

    students.push({
      firstname: "Christian",
      lastname: "Schmidt"
    })

    console.log(students);

    console.log("Average: ", average());

    /*let arr: any = [3, 5, 7];
    arr.foo = "hallo";
    console.log(arr);

    for (let i of arr) {
      console.log("of: ", i); // logs "3", "5", "7"
    }

    for (let i in arr) {
      console.log("in: ", i); // logs "0", "1", "2", "foo"
    }

    arr.forEach(function () {

    })

    // Die forEach() Methode führt eine übergebene Funktion für jedes Element eines Arrays aus.
    arr.forEach(function (element: any, index: any) {
      console.log("for each element: ", element); // logs "3", "5", "7"
      console.log("for each index: ", index);   // logs "0", "1", "2"
    });

  // or with Object.keys()

    Object.keys(arr).forEach(function (element, index) {
      console.log("keys element: ", arr[element]); // logs "3", "5", "7", "hallo"
      console.log("keys index: ", arr[index]);   // logs "3", "5", "7"
    });*/

  }


}

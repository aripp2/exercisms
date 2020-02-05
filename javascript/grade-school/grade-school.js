//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor(students, grades) {
    this.students = students || {},
    this.grades = grades || []
  }
  roster() {
    return this.students;
  }

  add(studentName, grade) {
    if (this.grades.length === 0) {
        this.grades = [grade]

        this.students = { [grade]: [studentName] };
    } else if (this.grades.includes(grade)) {
      this.students = { [grade]: ([...this.students[grade], studentName])}
    } else {
      
    }
    // grades.forEach(class => {
    //   if (class === grade) {
    //   this.students = { [grade]: [].push(studentName)]}
    //   }
    // })
    // this.students = { [grade]: [students]};
  }

  grade() {
    
  }
}

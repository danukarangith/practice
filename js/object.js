let student ={}
console.log('type of student:',typeof student)
console.log('student :', student)



student ={
    firstName: 'danuka',
    lastName: 'kavinda',
    email:'danuka@gmail.com',
    phoneNumber:'0771234567',
    isRegitered:true,
    age:13
}
console.log('student :', student)
console.log('student :', student.email)
console.log('student :', student['email'])

student.age = 20;
console.log('age :',student.age)
console.log('age :',student)

let school ={}
console.log('type of school :', typeof school)

school={
    firstName: 'aloysius',
    lastName:  'college',
    address : 'galle'

}
console.log(school)

let dog ={}
dog={}

let person={
    name: 'kamal',
    age:30,
    greet:function (){
        console.log("good morning")

    }


    

}
console.log(person.greet())

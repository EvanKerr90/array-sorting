//var array = [10, 2, 5, 1, 9];
//array.sort(sortFunction);

//function sortFunction(a, b) {
  //return (a - b);
//}
//console.log(array)




var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];



 var sortNames = function(a, b) {
  if (a.name > b.name) {
    return true;
  } else if (a.age < b.age) {
    return true;
  } else {
    return false;
  }
}

students.sort(sortNames);

console.log(students);


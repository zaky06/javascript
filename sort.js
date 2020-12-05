




cities.sort();
console.log(cities);

let nums = [7, 40, 600, 6];
nums.sort();
console.log(nums);

//должна возвращать: 0, если first === second
//отрицательное число, если first < second
//положительное число, если first > second
function sortArr(first, second) {
  // if (first === second) return 0; и тд, либо:
  return first - second;
}

nums.sort(sortArr);
console.log(nums);

let users = [
  {
    login: "qwe",
    age: 23,
    city: "Анапа",
  },
  {
    login: "asd",
    age: 34,
    city: "Москва",
  },
  {
    login: "rty56",
    age: 34,
    city: "Тверь",
  }
];


function sortUsers(first, second) { // по возрасту, по городу
  //return first.age - second.age; // по возрасту
  return first.city.localeCompare(second.city); // по городу
}
users.sort(sortUsers);

let info = {
  "additional_info":
  {"vaccination": false, "passport": false}
};
for (let propName in info) {
  for (let prop2Nmae in info[propName]){
  console.log(prop2Name, info[propNmae][prop2Name]);
  }
}

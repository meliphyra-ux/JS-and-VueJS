const users = [
    {name: 'nikita' , age: 16},
    {name: 'sasha', age: 19},
    {name: 'Anton', age: 23}
];
const getAge = users => {
    return users.filter(user => user.age > 20)
}
export {getAge, users as default}
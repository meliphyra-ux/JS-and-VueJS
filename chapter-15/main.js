class User{
    constructor(user, email){
        this.user = user;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.user} just logged in`)
        return this;
    }
    logout(){
        console.log(`${this.user} just logged out`);
        return this;
    }
    incScore(){
        this.score++
        console.log(`${this.user} has score of ${this.score}`)
        return this;
    }
}

class Admin extends User{
    constructor(user, email, title){
        super(user, email);
        this.title = title;
    }
    deleteUser(user){
        users = users.filter(u => u.user !== user.user)
    }
}
const userTwo = new User('shaun', 'shaun@example.com');
const userThree = new Admin('luigi', 'luigi@example.com', 'black-belt');
userTwo.login().incScore().incScore().logout();
userThree.login();
let users = [userTwo, userThree];

userThree.deleteUser(userTwo);
console.log(userThree);

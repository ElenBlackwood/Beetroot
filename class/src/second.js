/*створити клас Юзер 
у конструктері імя, рік нар, скільки років
створити метод який буде перевіряти чи насправді йому 1999 30 років fals or true
if true => thi is not true і переписати в контрукторі значення його віку*/


class User {

    constructor(name, yearOfBirth, age) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.age = age;
        this.gender;
    }

    checkAge() {
        let currYear = new Date(); 
        if ((currYear.getFullYear() - this.yearOfBirth) == this.age ) {
            alert('True');
        }
        else {
            alert ('False');
            return this.age = (currYear - this.yearOfBirth)
        }

    }
}

let user = new User('Lena', 1998, 23);

user.checkAge();

/*новий клас який наслідує попередній клас
перевірити стать та вивести в консоль/алерт 
додати в конструктор дані*/


class NewUser extends User {
    
    checkGender(gender) {
        if (gender == 'Man') {
            this.gender = gender;
            alert('Male');
        } else {
            this.gender = gender;
            alert("Female");
        }
    } 
    

}

let newUser = new NewUser ('Lena', 1998, 23);
newUser.checkGender('woman');


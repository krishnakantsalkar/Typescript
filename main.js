var courses = /** @class */ (function () {
    // one way to give value to private property outside of class #1
    function courses(auth) {
        this.auth = auth;
        this.author = auth;
    }
    // 2nd way to give value to private property #2
    //   constructor(private author) {
    //     console.log(`Author: ${author}`);
    //   }
    courses.prototype.course1 = function () {
        if (this.title) {
            console.log("Title: " + this.title);
        }
    };
    courses.prototype.course2 = function () {
        if (this.price) {
            console.log("Price: " + this.price);
        }
    };
    courses.prototype.course3 = function () {
        if (courses.book) {
            console.log("Book name: " + courses.book);
        }
    };
    courses.prototype.course4 = function () {
        if (this.author) {
            console.log("Author: " + this.author);
        }
    };
    //static method
    courses.course5 = function () {
        if (courses.book) {
            console.log(courses.book + " [static method only accepts static property]");
        }
    };
    Object.defineProperty(courses.prototype, "courseprice", {
        // getter and setter for price
        get: function () {
            return this.price;
        },
        set: function (courseprice) {
            this.price = courseprice;
        },
        enumerable: true,
        configurable: true
    });
    return courses;
}());
var cour = new courses("alex");
cour.title = "I am legend";
cour.courseprice = 100;
// cour.courseauthor = "alex";// part of #3
courses.book = "goosebumps";
cour.course1();
cour.course2();
cour.course3();
cour.course4();
courses.course5();

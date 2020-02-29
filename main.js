"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var abstract_1 = require("./abstract");
var courses = /** @class */ (function (_super) {
    __extends(courses, _super);
    // one way to give value to private property outside of class #1
    //   constructor(public auth) {
    //     this.author = auth;
    //   }
    // 2nd way to give value to private property #2
    function courses(author) {
        var _this = _super.call(this) || this;
        _this.author = author;
        console.log("Author: " + author);
        return _this;
    }
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
    courses.prototype.course6 = function () {
        if (this.author) {
            console.log("author from private method: " + this.author);
        }
    };
    courses.prototype.publishDate = function () {
        console.log("Date is Jan");
    };
    //inherited abstract
    courses.prototype.abstract1 = function () {
        if (this.title) {
            console.log("abstract1 works");
        }
    };
    courses.prototype.abstract2 = function () {
        if (this.title) {
            console.log("abstract2 works");
        }
    };
    Object.defineProperty(courses.prototype, "abstract22", {
        get: function () {
            return this.abstract2();
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(courses.prototype, "authors", {
        // getter and setter for author
        // 3rd way to give value to private property outside of class #3
        //   get courseauthor() {
        //     return this.author
        //   }
        //getter setter for private function
        get: function () {
            return this.course6();
        },
        enumerable: true,
        configurable: true
    });
    return courses;
}(abstract_1.Abstract));
exports.courses = courses;
// let cour = new courses("alex"); // instance creation to access class
// //public property
// cour.title = "I am legend";
// //private property using getter setter
// cour.courseprice = 100;
// // cour.courseauthor = "alex";// part of #3
// //static property
// courses.book = "goosebumps";
// //invoke functions in class
// cour.course1();
// cour.course2();
// cour.course3();
// cour.course4();
// courses.course5();

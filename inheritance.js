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
var main_1 = require("./main");
//inheritance
var inheritance = /** @class */ (function (_super) {
    __extends(inheritance, _super);
    function inheritance(auth) {
        var _this = _super.call(this, auth) || this;
        _this.auth = auth;
        return _this;
    }
    inheritance.prototype.courses1 = function () {
        if (this.title) {
            console.log("title: " + this.title);
        }
        if (this.price) {
            console.log("price: " + this.price);
        }
    };
    inheritance.prototype.publishDate = function () {
        console.log("Date is November");
    };
    inheritance.prototype.courses2 = function () {
        // return this.publishDate();
        return _super.prototype.publishDate.call(this);
    };
    return inheritance;
}(main_1.courses));
exports.inheritance = inheritance;
var inherit = new inheritance("Alex");
//giving values to base class
main_1.courses.book = "Fiction";
inherit.title = "Sherlock Holmes";
inherit.courseprice = 400;
inherit.courses1();
inherit.authors; // private functions using getter,setter dont need ()
inherit.courses2();

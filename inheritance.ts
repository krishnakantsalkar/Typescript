import { courses } from "./main";

//inheritance
export class inheritance extends courses {
  // pass a parameter first in current constru. to be used by super below
  constructor(private auth: string) {
    super(auth); //super provides value for base class' constructor if it needs any
  }
  public courses1() {
    if (this.title) {
      console.log(`title: ${this.title}`);
    }
    if (this.price) {
      console.log(`price: ${this.price}`);
    }
  }

  public publishDate() {
    console.log("Date is November");
  }

  public courses2() {
    // return this.publishDate(); // executes function from this class
    return super.publishDate(); // executes function from base class
  }
}

let inherit = new inheritance("Alex");
//giving values to base class
courses.book = "Fiction"; //static property from base class
inherit.title = "Sherlock Holmes";
inherit.courseprice = 400;
inherit.courses1();
inherit.authors; // private functions using getter,setter dont need ()
inherit.courses2();

inherit.abstract1();
inherit.abstract22;

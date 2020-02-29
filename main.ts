import { Abstract } from "./abstract";

export class courses extends Abstract {
  public title: string; // public property
  //   private author: string; // part of #1 , private property
  private rating: number;
  protected price: number; // protected property
  static book: string; //static property

  // one way to give value to private property outside of class #1
  //   constructor(public auth) {
  //     this.author = auth;
  //   }

  // 2nd way to give value to private property #2
  constructor(private author) {
    super();
    console.log(`Author: ${author}`);
  }

  public course1() {
    if (this.title) {
      console.log(`Title: ${this.title}`);
    }
  }

  public course2() {
    if (this.price) {
      console.log(`Price: ${this.price}`);
    }
  }

  public course3() {
    if (courses.book) {
      console.log(`Book name: ${courses.book}`);
    }
  }

  public course4() {
    if (this.author) {
      console.log(`Author: ${this.author}`);
    }
  }

  //static method
  static course5() {
    if (courses.book) {
      console.log(
        `${courses.book} [static method only accepts static property]`
      );
    }
  }

  private course6() {
    if (this.author) {
      console.log(`author from private method: ${this.author}`);
    }
  }

  public publishDate() {
    console.log("Date is Jan");
  }

  //inherited abstract

  public abstract1() {
    if (this.title) {
      console.log("abstract1 works");
    }
  }

  protected abstract2() {
    if (this.title) {
      console.log("abstract2 works");
    }
  }

  get abstract22() {
    return this.abstract2();
  }

  // getter and setter for price
  get courseprice() {
    return this.price;
  }
  set courseprice(courseprice: number) {
    this.price = courseprice;
  }

  // getter and setter for author
  // 3rd way to give value to private property outside of class #3

  //   get courseauthor() {
  //     return this.author
  //   }

  //getter setter for private function

  get authors() {
    return this.course6();
  }
}

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

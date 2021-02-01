var expect    = require("chai").expect;
var calculator = require("../app/calculator");

describe("Calculator", () => {
    describe("Add - Good", () => {
       it("Adds two numbers together", () => {
           var result = calculator.add(5,2);

           expect(result).to.equal(7);
       });
    });
    
    describe("Add - Bad", () => {
        it("Adds two numbers together", () => {
            var result = calculator.add(5,2);
 
            expect(result).to.equal(8);
        });
     });

    describe("Sub - Good", () => {
        it("Subtracts one number from another", () => {
            var result = calculator.sub(5,2);

            expect(result).to.equal(3)
        });
    });

    describe("Sub - Bad", () => {
        it("Subtracts one number from another", () => {
            var result = calculator.sub(5,2);

            expect(result).to.equal(5)
        });
    });

    describe("Mul - Good", () => {
        it("Multiplies two numbers together", () => {
            var result = calculator.mul(5,2);
 
            expect(result).to.equal(10);
        });
     });
     
     describe("Mul - Bad", () => {
         it("Multiplies two numbers together", () => {
             var result = calculator.mul(5,2);
  
             expect(result).to.equal(12);
         });
      });
 
     describe("Div - Good", () => {
         it("Divides one number by another", () => {
             var result = calculator.div(10,2);
 
             expect(result).to.equal(5)
         });
     });
 
     describe("Div - Bad", () => {
         it("Divides one number by another", () => {
             var result = calculator.div(10,2);
 
             expect(result).to.equal(2)
         });
     });
});
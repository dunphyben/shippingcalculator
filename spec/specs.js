describe("Package", function() {
  describe("interstateFee", function() {
    it("Charges $5 for outside Oregon shipping", function() {
      var testPackage = Object.create(Package);
      testPackage.destination = "colorado";
      testPackage.interstateFee();
      testPackage.estimate.should.equal(5);
    });
  });

  describe("Dimension Fee", function() {
    it("Adds $5 for a package that has a total lwh dimension between 25 and 75", function() {
      var testPackage = Object.create(Package);
      testPackage.length = 3;
      testPackage.width = 4;
      testPackage.height = 5;
      testPackage.dimension();
      testPackage.estimate.should.equal(5);
    });
  });

  describe("Package Weight", function() {
    it("Adds .25 for each lb and then raises it to the power of 1.5 for compounding effect, rounded to the next cent", function() {
      var testPackage = Object.create(Package);
      testPackage.weight = 11;
      testPackage.weightFee();
      testPackage.estimate.should.equal(4.56);
    });
  });
  
  describe("calculate", function() {
    it("runs dimension(), interstateFee(), and weightFee() methods and returns final estimate", function() {
      var testPackage = Object.create(Package);
      testPackage.length = 1;
      testPackage.width = 1;
      testPackage.height = 1;
      testPackage.weight = 10;
      testPackage.destination = "colorado";
      testPackage.calculateEstimate().should.equal(13.95)
    })
  })
});

const {expect} = require("chai");

it("should return 4", () => {
    //Arange    
    const x = 2;
    const y = 2;

    //Act
    const expected = x + y;

    //Assert
    expect(expected).to.eq(4);
});

it("should return 4 again", () => {
    //Arange    
    const x = 2;
    const y = 2;

    //Act
    const expected = x + y;

    //Assert
    expect(expected).to.eq(4);
});
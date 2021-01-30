var assert = require("chai").assert;
var expect = require("chai").expect;

// Put your CUT here

class HighestNumber
{
    findHighestNumber( arrayToCheck )
    {
        if (arrayToCheck.length > 0) {
            
            var b = arrayToCheck[0];
            var i;
            var j ;

            for (i = 0; i < arrayToCheck.length;)
            {
                for (j = 1; j < arrayToCheck.length;)
                {
                    console.log('for i :', i);
                    console.log('for j :', j);
                    if (arrayToCheck[i] > arrayToCheck[j])
                    {
                        b = arrayToCheck[i];
                        j++;
                        console.log('first i :', i);
                        console.log('first j :', j);
                    } else
                    {
                        b = arrayToCheck[j];
                        i = j;
                        j++;
                        console.log('second i :', i);
                        console.log('second j :', j);
                    }
                }
                return b;
            }

            
        
        }
        
    }  
}


describe('find the highest number', function() {
    it('return highest item in array', function() {
        // arrange...
        var cut = new HighestNumber();
        var expectedResult = 11
        var inputArray = [4, 5, -8, 3, 11, -21, 6];

        // act...
        var actualResult = cut.findHighestNumber(inputArray);
        console.log(actualResult)

        // assert...
        assert.equal(actualResult, expectedResult);
        expect(actualResult).to.eql(expectedResult);

    });

    it('return highest item in array with 2 elements', function() {
        // arrange...
        var cut = new HighestNumber();
        var expectedResult = 13;
        var inputArray = [13, 7];

        // act...
        var actualResult = cut.findHighestNumber(inputArray);
        console.log(actualResult)

        // assert...
        assert.equal(actualResult, expectedResult);
        expect(actualResult).to.eql(expectedResult);

    });

    it('single item in array, return that item', function() {
        // arrange...
        var cut = new HighestNumber();
        var expectedResult = 11
        var inputArray = [11];

        // act...
        var actualResult = cut.findHighestNumber( inputArray )
        console.log(actualResult)

        // assert...
        assert.equal(actualResult, expectedResult);
        expect(actualResult).to.eql(expectedResult);


    });

    it('If several numbers are equal and highest, only one should be returned', function() {
        // arrange...
        var cut = new HighestNumber();
        var expectedResult = 11
        var inputArray = [4, 5, -8, 3, 11, -21, 6, 11];

        // act...
        var actualResult = cut.findHighestNumber(inputArray);
        console.log(actualResult)

        // assert...
        assert.equal(actualResult, expectedResult);
        expect(actualResult).to.eql(expectedResult);

    });

});
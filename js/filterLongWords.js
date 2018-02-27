const filterLongWords = (maxLength, arr) => {
    let filteredArr = arr.filter(x => {
        return x.length <= maxLength;
    });
    console.log(filteredArr);
};

let arr = ['test', 'testtesttest', 'testtest', 'testtestestseset'];

filterLongWords(20, arr);
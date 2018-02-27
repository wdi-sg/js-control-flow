const checkGrade = (grade) => {
    switch (true) {
        case (grade > 90):
            console.log('A');
            break;
        case (grade > 75):
            console.log('B');
            break;
        case (grade > 65):
            console.log('C');
            break;
        case (grade > 55):
            console.log('D');
            break;
        case (grade <= 55):
            console.log('F');
            break;
        default:
            console.log('Please input a score');
    }
}

checkGrade(99);
checkGrade(77);
checkGrade(66);
checkGrade(56);
checkGrade(40);
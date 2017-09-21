var grade = 85;
switch (true) {
  case (grade<20):
    console.log('F');
    break; // it encounters this break so will not continue into 'default:'
  case (grade<30):
    console.log('E')
    break;
  case (grade<40):
    console.log('D');
  case (grade<65):
    console.log('C');
    case (grade<80):
      console.log('B');
      case (grade<100):
        console.log('A');
        break;

}

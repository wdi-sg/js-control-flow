var text = prompt('hello ur grade')

switch(true) {
    case (0 <= text &&  text < 30) :
        text = "Your grade is F";
        break;
    case (30 <= text &&  text < 50) :
        text = "Your grade is D";
        break;
    case (50 <= text &&  text < 70) :
        text = "Your grade is C";
        break;
     case (70 <= text &&  text < 85) :
        text = "Your grade is B";
        break;
      case (85 <= text &&  text < 100) :
        text = "Your grade is A";
        break;
    default:
        text = "No such score";
}

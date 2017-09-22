
function grade(val) {
  switch (true) {
      case (val < 20):
          console.log(val + " F");
          break;
      case (val > 20 && val <= 30):
          console.log(val +" E");
          break;
      case (val > 30 && val <= 50):
          console.log(val +" D");
          break;
      case (val > 50 && val <= 60):
          console.log(val +" C");
          break;
      case (val > 60 && val <= 80):
          console.log(val +" B");
          break;
      case (val > 80 && val <= 100):
          console.log(val + " A");
          break;
      default:
          alert("none");
          break;
}
}

grade(55)

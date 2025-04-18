var grade = "C";

switch (grade) {
  case "A":
    console.log("grade A");
    break;
  case "B":
    console.log("grade B");
    switch (age) {
      case 20:
        console.log("age 20");
    }
    break;

  default:
    console.log("none of them");
}

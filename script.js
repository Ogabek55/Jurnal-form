function submitForm() {
  var people = [];

  for (var i = 1; i <= 5; i++) {
    var person = {};

    person.name = document.getElementById("name" + i).value;
    person.attended = document.getElementById("attended" + i).checked;
    person.taskDone = document.getElementById("taskDone" + i).checked;

    people.push(person);
  }

  var attendedList = "";
  var notAttendedList = "";
  var taskDoneList = "";
  var taskNotDoneList = "";
  var allStudents = "";

  for (var i = 0; i < people.length; i++) {
    if (people[i].attended) {
      attendedList += people[i].name + ", ";
    } else {
      notAttendedList += people[i].name + ", ";
    }

    if (people[i].taskDone) {
      taskDoneList += people[i].name + ", ";
    } else {
      taskNotDoneList += people[i].name + ", ";
    }

    allStudents += people[i].name + ", ";
  }

  alert(
    "1. Darsga kelganlar: " +
      attendedList.slice(0, -2) +
      "\n" +
      "2. Darsga kelmaganlar: " +
      notAttendedList.slice(0, -2) +
      "\n" +
      "3. Uy vazifasini qilganlar: " +
      taskDoneList.slice(0, -2) +
      "\n" +
      "4. Uy vazifasini qilmaganlar: " +
      taskNotDoneList.slice(0, -2) +
      "\n" +
      "5. Barcha o'quvchilar: " +
      allStudents.slice(0, -2)
  );
}

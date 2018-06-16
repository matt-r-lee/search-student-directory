var students = [
  {
   name: 'Dave',
    track: 'Front End Development',
    achievements: 158,
    points: 14730
  },
  {
    name: 'Jody',
    track: 'iOS Development with Swift',
    achievements: '175',
    points: '16375'
  },
  {
    name: 'Jordan',
    track: 'PHP Development',
    achievements: '55',
    points: '2025'
  },
  {
    name: 'John',
    track: 'Learn WordPress',
    achievements: '40',
    points: '1950'
  },
  {
    name: 'Trish',
    track: 'Rails Development',
    achievements: '5',
    points: '350'
  }
];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

var endProgram = false;
var student;

do {
    var searchStudent = prompt("Search student records: type student's name (or type 'quit' to end).");
    for (var i = 0; i < students.length; i += 1) {
    student = students[i];
        if (searchStudent === student.name){
            var html = "";
            html += "<h2>Student: " + student.name + "</h2>";
            html += "<p>Track: " + student.track + "</p>";
            html += "<p>Points: " + student.points + "</p>";
            html += "<p>Achievements: " + student.achievements + "</p>";
            print(html);
            endProgram = true;
            }
        else if ( searchStudent === "quit" ){
            endProgram = true;
        }
        else {
//            alert("There is no student with that name, try again.");
        };
    }
} while ( ! endProgram )

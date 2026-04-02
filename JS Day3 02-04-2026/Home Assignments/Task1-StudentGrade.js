function gradeElseIf(marks) {
    if (marks >= 76 && marks <= 100) return 'A';
    else if (marks >= 61 && marks <= 75) return 'B';
    else if (marks >= 56 && marks <= 60) return 'C';
    else if (marks >= 41 && marks <= 55) return 'D';
    else if (marks < 41) return 'Failed';
    else return 'Invalid marks';
}

function gradeSwitch(marks) {
    switch (true) {
        case (marks >= 76 && marks <= 100):
            return 'A';

        case (marks >= 61 && marks <= 75):
            return 'B';

        case (marks >= 56 && marks <= 60):
            return 'C';

        case (marks >= 41 && marks <= 55):
            return 'D';

        case (marks < 41):
            return 'Failed';

        default:
            return 'Invalid marks';
    }
}

console.log(gradeElseIf(80));
console.log(gradeSwitch(50));
export class Student {
    constructor (firstName, lastname, birthYear, scoreList) {
        this.fistName = firstName;
        this.lastName = lastname;
        this.birthYear = birthYear;
        this.scoreList = scoreList;
        this.attendanceLog = new Array(25);
    }

    getAge() {
        const birthYear = this.birthYear;
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }

    getAverageScore() {
        const totalScore = this.scoreList.reduce((acc, value) => acc + value);
        const scoreNumber = this.scoreList.length;
        return totalScore / scoreNumber;
    }

    present() {
        const attendanceLog = this.attendanceLog;
        for (let i = 0; i < attendanceLog.length; i++) {
            if (typeof attendanceLog[i] !== 'boolean') {
                attendanceLog[i] = true;
                console.log(`${this.fistName} ${this.lastName} were present at ${i+1} class`);
                return;
            }
        }
        console.log('Attendance log is full');
    }

    absent() {
        const attendanceLog = this.attendanceLog;
        for (let i = 0; i < attendanceLog.length; i++) {
            if (typeof attendanceLog[i] !== 'boolean') {
                attendanceLog[i] = false;
                console.log(`${this.fistName} ${this.lastName} were absent at ${i+1} class`);
                return;
            }
        }
        console.log('Attendance log is full');
    }

    summary() {
        const totalClasses = this.attendanceLog.filter((value) => value === true || value === false);
        const totalAttendance = totalClasses.filter((value) => value === true);
        const averageAttendance = totalAttendance.length / totalClasses.length;
        const averageScore = this.getAverageScore();

        if (averageAttendance > 0.9 && averageScore > 90) {
            console.log('Good job!');
        } else if (averageAttendance > 0.9 || averageScore > 90) {
            console.log('Good, but it can be better!');
        } else {
            console.log('You should improve your progress!');
        }
    }
}

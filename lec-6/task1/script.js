
const students = [
  { name: "انعام",  marks: [85, 90, 81], major: "هندسة" },
  { name: "سارة",  marks: [95, 88, 92], major: "طب" },
  { name: "خالد",  marks: [45, 50, 55], major: "هندسة" },
  { name: "سندس",  marks: [70, 65, 80], major: "تجارة" },
  { name: "عمر",   marks: [30, 40, 35], major: "تجارة" },
  { name: "رامي",   marks: [88, 79, 91], major: "طب" },
];

const PASS_MARK = 60; 
function calcAverage(marks) {
  const sum = marks.reduce((total, mark) => total + mark, 0);
  return sum / marks.length;
}

students.forEach((student) => {
  student.average = calcAverage(student.marks);
});

function getStatistics(list) {
  const passedCount = list.filter((s) => s.average >= PASS_MARK).length;
  const failedCount = list.length - passedCount;

  const passRate = (passedCount / list.length) * 100;
  const failRate = (failedCount / list.length) * 100;

  const topStudent = list.reduce((best, s) => (s.average > best.average ? s : best));
  const lowStudent = list.reduce((worst, s) => (s.average < worst.average ? s : worst));

  return { passRate, failRate, topStudent, lowStudent };
}

const stats = getStatistics(students);
const majors = [...new Set(students.map((s) => s.major))];

function majorAverage(majorName) {
  const majorStudents = students.filter((s) => s.major === majorName);
  if (majorStudents.length === 0) return null; 

  const total = majorStudents.reduce((sum, s) => sum + s.average, 0);
  return total / majorStudents.length;
}

console.log("---- الطلاب ----");
students.forEach((s) => {
  console.log(`الاسم: ${s.name} | العلامات: ${s.marks.join(", ")} | المعدل: ${s.average.toFixed(2)} | التخصص: ${s.major}`);
});

console.log("\n----- الإحصائيات -----");
console.log(`نسبة النجاح: ${stats.passRate.toFixed(1)}%`);
console.log(`نسبة الرسوب: ${stats.failRate.toFixed(1)}%`);
console.log(`أعلى معدل: ${stats.topStudent.name} (${stats.topStudent.average.toFixed(2)})`);
console.log(`أقل معدل: ${stats.lowStudent.name} (${stats.lowStudent.average.toFixed(2)})`);

console.log("\n----- التخصصات -----");
console.log(majors);

console.log("\n----- معدل كل تخصص -----");
majors.forEach((m) => {
  console.log(`${m}: ${majorAverage(m).toFixed(2)}`);
});

console.log("\nمعدل هندسة :", majorAverage("هندسة"));
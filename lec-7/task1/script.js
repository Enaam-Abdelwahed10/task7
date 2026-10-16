
const sections = {
  A: { from: 1, to: 10 },
  B: { from: 11, to: 20 },
  C: { from: 21, to: 30 },
};

const graves = [
  { id: 1,  name: "أحمد محمد علي",      birthDate: "1950-03-12", deathDate: "2020-07-25", graveNumber: 1,  section: "A" },
  { id: 2,  name: "فاطمة خالد حسن",     birthDate: "1962-11-05", deathDate: "2022-01-18", graveNumber: 2,  section: "A" },
  { id: 3,  name: "يوسف إبراهيم سالم",   birthDate: "1945-06-30", deathDate: "2019-09-02", graveNumber: 3,  section: "A" },
  { id: 4,  name: "مريم عبد الله",       birthDate: "1970-02-14", deathDate: "2022-05-10", graveNumber: 5,  section: "A" },
  { id: 5,  name: "خالد سعيد نصر",       birthDate: "1938-08-21", deathDate: "2020-12-01", graveNumber: 7,  section: "A" },
  { id: 6,  name: "ليلى حسن عودة",       birthDate: "1955-01-09", deathDate: "2023-03-30", graveNumber: 8,  section: "A" },
  { id: 7,  name: "عمر زياد البيطار",    birthDate: "1948-04-17", deathDate: "2021-06-12", graveNumber: 9,  section: "A" },
  { id: 8,  name: "سلمى ناصر الحلو",     birthDate: "1966-09-23", deathDate: "2022-11-03", graveNumber: 11, section: "B" },
  { id: 9,  name: "حسن محمود شعث",       birthDate: "1940-12-01", deathDate: "2018-02-14", graveNumber: 12, section: "B" },
  { id: 10, name: "هناء رشيد أبو سمرة",  birthDate: "1975-07-07", deathDate: "2023-08-19", graveNumber: 14, section: "B" },
  { id: 11, name: "إبراهيم عيسى قاسم",   birthDate: "1952-05-25", deathDate: "2020-03-08", graveNumber: 15, section: "B" },
  { id: 12, name: "زينب أحمد الغول",     birthDate: "1958-10-30", deathDate: "2021-09-27", graveNumber: 17, section: "B" },
  { id: 13, name: "محمود فتحي دغمش",     birthDate: "1943-02-02", deathDate: "2019-12-15", graveNumber: 19, section: "B" },
  { id: 14, name: "رنا سامي الكرد",      birthDate: "1980-06-18", deathDate: "2022-07-21", graveNumber: 21, section: "C" },
  { id: 15, name: "علي حسين المصري",     birthDate: "1935-11-11", deathDate: "2017-04-05", graveNumber: 22, section: "C" },
  { id: 16, name: "آمنة يوسف حجازي",     birthDate: "1960-03-03", deathDate: "2023-01-09", graveNumber: 24, section: "C" },
  { id: 17, name: "طارق منير أبو عودة",  birthDate: "1972-08-08", deathDate: "2021-02-20", graveNumber: 25, section: "C" },
  { id: 18, name: "نادية كمال البنا",    birthDate: "1949-01-26", deathDate: "2020-10-10", graveNumber: 26, section: "C" },
  { id: 19, name: "سعيد عبد الرحمن",     birthDate: "1956-09-14", deathDate: "2022-12-25", graveNumber: 28, section: "C" },
  { id: 20, name: "جميلة فؤاد النجار",   birthDate: "1964-12-19", deathDate: "2023-06-02", graveNumber: 30, section: "C" },
];

const visits=[
  { visitorName: "محمود أحمد",   graveId: 1,  date: "2024-01-10" },
  { visitorName: "سارة أحمد",    graveId: 1,  date: "2024-03-15" },
  { visitorName: "محمود أحمد",   graveId: 1,  date: "2024-06-20" },
  { visitorName: "عمر خالد",     graveId: 2,  date: "2024-02-05" },
  { visitorName: "هدى يوسف",     graveId: 3,  date: "2024-04-12" },
  { visitorName: "رامي مريم",    graveId: 4,  date: "2024-05-01" },
  { visitorName: "رامي مريم",    graveId: 4,  date: "2024-07-07" },
  { visitorName: "نور ليلى",     graveId: 6,  date: "2024-08-18" },
  { visitorName: "باسل عمر",     graveId: 7,  date: "2024-01-25" },
  { visitorName: "دعاء سلمى",    graveId: 8,  date: "2024-03-02" },
  { visitorName: "دعاء سلمى",    graveId: 8,  date: "2024-04-22" },
  { visitorName: "دعاء سلمى",    graveId: 8,  date: "2024-09-09" },
  { visitorName: "كريم حسن",     graveId: 9,  date: "2024-05-30" },
  { visitorName: "لينا هناء",    graveId: 10, date: "2024-06-11" },
  { visitorName: "أنس إبراهيم",  graveId: 11, date: "2024-02-28" },
  { visitorName: "ريم زينب",     graveId: 12, date: "2024-07-19" },
  { visitorName: "ريم زينب",     graveId: 12, date: "2024-10-01" },
  { visitorName: "وليد محمود",   graveId: 13, date: "2024-04-04" },
  { visitorName: "ياسمين رنا",   graveId: 14, date: "2024-08-08" },
  { visitorName: "فادي علي",     graveId: 15, date: "2024-03-21" },
  { visitorName: "فادي علي",     graveId: 15, date: "2024-06-06" },
  { visitorName: "منى آمنة",     graveId: 16, date: "2024-09-15" },
  { visitorName: "جهاد طارق",    graveId: 17, date: "2024-05-17" },
  { visitorName: "سامي نادية",   graveId: 18, date: "2024-01-30" },
  { visitorName: "بشرى سعيد",    graveId: 19, date: "2024-07-27" },
  { visitorName: "إياد جميلة",   graveId: 20, date: "2024-10-12" },
];

function addAgeToGraves() {
  graves.forEach(function (grave) {
    const birth = new Date(grave.birthDate);
    const death = new Date(grave.deathDate);

    let age = death.getFullYear() - birth.getFullYear();

    if (death.getMonth() < birth.getMonth()) {
      age = age - 1;
    } else if (death.getMonth() === birth.getMonth() && death.getDate() < birth.getDate()) {
      age = age - 1;
    }

    grave.age = age;
  });
}
function findEmptyGraves(sectionName) {
  const section = sections[sectionName];

  const sectionGraves = graves.filter(function (g) {
    return g.section === sectionName;
  });
  const takenNumbers = sectionGraves.map(function (g) {
    return g.graveNumber;
  });

  const emptyGraves = [];
  for (let num = section.from; num <= section.to; num++) {
    if (!takenNumbers.includes(num)) {
      emptyGraves.push(num);
    }
  }

  return emptyGraves;
}
function getDeceasedByYear(year) {
  return graves.filter(function (g) {
    return new Date(g.deathDate).getFullYear() === year;
  });
}

function sortGravesByVisits() { 
  const withCount = graves.map(function (g) {
    const graveVisits = visits.filter(function (v) {
      return v.graveId === g.id;
    });

    return { ...g, visitsCount: graveVisits.length };
  });
  // مش كتير فاهمة هاي النقطة 
  withCount.sort(function (a, b) {
    return b.visitsCount - a.visitsCount;
  });
  return withCount;
}
function getVisitsBetween(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const filteredVisits = visits.filter(function (v) {
    const d = new Date(v.date);
    return d >= start && d <= end;
  });
  return filteredVisits.map(function (v) {
    const grave = graves.find(function (g) {
      return g.id === v.graveId;
    });

    return {
      visitorName: v.visitorName,
      visitDate: v.date,
      grave: grave,
    };
  });
}

addAgeToGraves();
console.log("1) القبور بعد إضافة العمر:");
console.log(graves);

console.log("2) القبور الفارغة في القسم A:");
console.log(findEmptyGraves("A"));

console.log("3) المتوفون في سنة 2022:");
console.log(getDeceasedByYear(2022));

console.log("4) القبور مرتبة حسب الزيارات:");
console.log(sortGravesByVisits());

console.log("5) الزيارات بين 2024-03-01 و 2024-06-30:");
console.log(getVisitsBetween("2024-03-01", "2024-06-30"));
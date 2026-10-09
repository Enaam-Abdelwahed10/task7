const MAX_PEOPLE = 10;
const MAX_WEIGHT = 1000;

function checkLoad(users) {
  const totalPeople = users.length;
  const totalWeight = users.reduce((sum, user) => sum + user.weight, 0);

  if (totalPeople > MAX_PEOPLE || totalWeight > MAX_WEIGHT) {
    console.log("أصبحت الحمولة زائدة ");
    return false;
  }

  console.log("الحمولة ضمن الحد المسموح ");
  return true;
}

const users = [
  { name: "أحمد", weight: 80 },
  { name:"نانا", weight: 60 },
  { name: "محمد", weight: 90 },
  { name: "ليلى", weight: 55 },
  { name: "خالد", weight: 85 },
  { name: "نور", weight: 50 },
  { name: "علي", weight: 100 },
  { name: "رنا", weight: 65 },
  { name: "يوسف", weight: 75 },
  { name: "هدى", weight: 58 },
  { name: "عمر", weight: 95 }
];

checkLoad(users); 


const car = {
  name: "فيرنا +عقلاة ",
  plateNumber: "123-45-678",
  driver: "أبو محمد",
  seats: 30,
  farePerPassenger: 3,   
  tripsPerDay: 15,       
  minPassengers: 25,       
  maxPassengers: 30,       
  nonPayingRate: 0.15,     
  maintenanceRate: 0.40,   
  fuelRate: 0.30,         
  workDaysPerWeek: 6,  
  weeksPerMonth: 4,    
};

function getAveragePassengers() {
  return (car.minPassengers + car.maxPassengers) / 2;
}

function calculateDailyGrossRevenue() {
  const passengersPerDay = car.tripsPerDay * getAveragePassengers();
  return passengersPerDay * car.farePerPassenger;
}
function calculateDailyActualRevenue() {
  const gross = calculateDailyGrossRevenue();
  const lostMoney = gross * car.nonPayingRate;
  return gross - lostMoney;
}
function calculateDailyMaintenance() {
  return calculateDailyGrossRevenue() * car.maintenanceRate;
}

function calculateDailyFuel() {
  return calculateDailyGrossRevenue() * car.fuelRate;
}

function calculateDailyNetProfit() {
  const actual = calculateDailyActualRevenue();
  const maintenance = calculateDailyMaintenance();
  const fuel = calculateDailyFuel();
  return actual - maintenance - fuel;
}

function calculateWeeklyNetProfit() {
  return calculateDailyNetProfit() * car.workDaysPerWeek;
}
function calculateMonthlyNetProfit(extraBreakdownCost) {
  if (extraBreakdownCost === undefined) {
    extraBreakdownCost = 0;
  }
  const monthlyProfit = calculateWeeklyNetProfit() * car.weeksPerMonth;
  return monthlyProfit - extraBreakdownCost;
}
const breakdownCost = 500;

console.log("السيارة:", car.name, "- السائق:", car.driver);
console.log("متوسط الركاب بالرحلة:", getAveragePassengers());
console.log("-----------------------------------");
console.log("الإيراد الإجمالي اليومي:", calculateDailyGrossRevenue(), "شيكل");
console.log("الإيراد الفعلي اليومي:", calculateDailyActualRevenue(), "شيكل");
console.log("مصاريف الصيانة اليومية:", calculateDailyMaintenance(), "شيكل");
console.log("مصاريف المحروقات اليومية:", calculateDailyFuel(), "شيكل");
console.log("-----------------------------------");
console.log("صافي الربح اليومي:", calculateDailyNetProfit(), "شيكل");
console.log("صافي الربح الأسبوعي:", calculateWeeklyNetProfit(), "شيكل");
console.log("صافي الربح الشهري (بدون عطل):", calculateMonthlyNetProfit(), "شيكل");
console.log("صافي الربح الشهري (بعد العطل):", calculateMonthlyNetProfit(breakdownCost), "شيكل");
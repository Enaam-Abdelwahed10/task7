const choices = ["حجرة", "ورقة", "مقص"];
const wins = {
  "حجرة": "مقص",
  "ورقة": "حجرة",
  "مقص": "ورقة"
};

function play() {
  const userChoice = prompt("اختار: حجرة، ورقة، أو مقص");

  if (userChoice === null) {
    alert("تم إلغاء اللعبة");
    return;
  }

  const user = userChoice.trim();

  if (!choices.includes(user)) {
    alert("غلط! اكتب وحدة من: حجرة، ورقة، مقص");
    play(); // يعيد السؤال
    return;
  }

  const computer = choices[Math.floor(Math.random() * choices.length)];

  let result;
  if (user === computer) {
    result = "تعادل ";
  } else if (wins[user] === computer) {
    result = "ربحت ";
  } else {
    result = "خسرت ";
  }

  alert(`انت اخترت: ${user}\nالجهاز اختار: ${computer}\n\nالنتيجة: ${result}`);

  if (confirm("بدك تلعب مرة ثانية؟")) {
    play();
  }
}

play();
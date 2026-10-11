function longestName(...names) {
  const firstTen = names.slice(0, 10);

  if (firstTen.length === 0) {
    console.log("ما في أسماء");
    return;
  }

  let longest = firstTen[0];

  firstTen.forEach(name => {
    if (name.length > longest.length) {
      longest = name;
    }
  });

  console.log("عدد الأسماء المستقبلة:", firstTen.length);
  console.log("الاسم الأكثر حروفاً:", longest);
  return longest;
}

longestName("أحمد", "محمد", "عبدالرحمن", "عاهد", "انعام" ,"رامي ");
function cleanText(input) {
// هنا استخدمت regex
  const noSpecial = input.replace(/[^\p{L}\p{N}\s]/gu, "");
  const singleSpaces = noSpecial.replace(/\s+/g, " ");
  const result = singleSpaces.trim();
  return result;
}

console.log(cleanText("   Hi , my name is enaam abdelwahed !! @@  "));

console.log(cleanText("Hello,     world!!!   How    are  you???"));

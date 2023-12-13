const text = "Sam is going to codingschool";
  const result1 = text.toUpperCase();
  document.write(result1 + "<br>");
  const result2 = text.toLowerCase();
  document.write(result2 + "<br>");

  const result3 = text.charAt(0).toUpperCase().concat(
                  text.slice(1, 4).toUpperCase(),
                  text.slice(4, 10).toLowerCase(),
                  text.slice(10, 16).toLowerCase(),
                  text.slice(22, 30).toUpperCase());
  document.write(result3 + "<br>");
const text = "Sam is going to codingschool";
  const result1 = text.toUpperCase();
  document.write(result1 + "<br>");
  const result2 = text.toLowerCase();
  document.write(result2 + "<br>");

  const result3 = text.charAt(0).toUpperCase().concat(
                  text.slice(1, 3).toUpperCase(),
                  text.slice(4, 5).toLowerCase(),
                  text.slice(6, 7).toUpperCase(),
                  text.slice(7, 23).toLowerCase(),
                  text.slice(23).toUpperCase());
  document.write(result3 + "<br>");
function sortColors(str) {
  // Split the string into an array of color names
  let colorArr = str.split(" ");

  // Create an array of objects containing the color name and its last digit
  let colorObjects = colorArr.map(color => {
      let lastDigit = parseInt(color.slice(-1));
      return {color: color.slice(0, -1), lastDigit};
  });



  // Sort the array of objects based on the last digit
  colorObjects.sort((a, b) => a.lastDigit - b.lastDigit);
  // Join the color names back together into a single string
  let sortedString = colorObjects.map(c => c.color).join(" ");
  return sortedString;
}





let str = "gold2 black1 white3"


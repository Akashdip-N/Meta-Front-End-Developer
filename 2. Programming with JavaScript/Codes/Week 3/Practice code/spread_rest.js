let fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tangerine",
  "Ugli fruit",
  "Vanilla bean",
  "Watermelon",
  "Xigua",
  "Yellow passion fruit",
  "Zucchini"
];

let vegetables = [
  "Asparagus",
  "Broccoli",
  "Carrot",
  "Daikon",
  "Eggplant",
  "Fennel",
  "Garlic",
  "Horseradish",
  "Iceberg lettuce",
  "Jalapeño",
  "Kale",
  "Leek",
  "Mushroom",
  "Napa cabbage",
  "Okra",
  "Parsnip",
  "Quinoa",
  "Radish",
  "Spinach",
  "Tomato",
  "Upland cress",
  "Vegetable marrow",
  "Watercress",
  "Xerophyte"
];

function showVars(){
  const fruits1 = [...vegetables, ...fruits]

  for(i in fruits1)
    console.log(fruits1[i]);
}

showVars()

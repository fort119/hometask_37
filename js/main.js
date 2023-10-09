const car = { brand: "", model: "", color: "" };
const updatedProperties = { type: "" };
Object.assign(car, updatedProperties);

const electro = Object.assign({}, car, {
  type: "electro",
  maxDistance: 0,
});

const common = Object.assign({}, car, {
  type: "common",
  gas: "",
  gearBox: "",
});

const models = {
  tesla: {
    ...electro,
    brand: "Tesla",
    model: "S Plaid",
    maxDistance: 850,
  },
  leaf: {
    ...electro,
    brand: "Nissan",
    model: "Leaf",
    maxDistance: 270,
  },
  x5: {
    ...common,
    brand: "BMW",
    model: "X5",
    gas: "Diesel",
    gearBox: "auto"
  },
  kenga: {
    ...common,
    brand: "Renault",
    model: "Kangoo",
    gas: "Petrol",
    gearBox: "mechanic"
  },
}

for (key in models) {
  const carDesrc = [];
  Object.entries(models[key]).forEach(([key, value]) => {
    carDesrc.push(`${key}: "${value}", `);
  });
  console.log(key + ":");
  console.log(...carDesrc);
}

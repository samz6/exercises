const employees = [
  {
    name: "sami",
    age: 29,
    address: {
      str: "14131 travis st",
      city: "overland park",
      state: "kansas",
      zip: 66223
    }
  },
  {
    name: "swaroop",
    age: 22,
    address: {
      str: "14131 travis st",
      city: "overland park",
      state: "kansas",
      zip: 66223
    }
  }
];

const printObject = e => {
  const keys = Object.keys(e);
  for (const k of keys) {
    if (typeof e[k] != "object") {
      console.log(k + ":" + e[k]);
    } else {
      printObject(e[k]);
    }
  }
};

employees.map(emp => printObject(emp));

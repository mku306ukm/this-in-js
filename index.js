let laptop1 = {
  cpu: "i7",
  ram: 16,
  brand: "HP",
  getConfig: function () {
    console.log(this.cpu);
  },
};

let laptop2 = {
  cpu: "i9",
  ram: 16,
  brand: "HP",
  getConfig: function () {
    console.log(this.cpu);
  },
};
laptop1.getConfig();

// note:this represents the current objects

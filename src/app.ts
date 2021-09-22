type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Combine types together.
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Hussein",
  privileges: ["Create", "Read", "Update", "Delete"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numerical = number | boolean;

type Universal = Combinable & Numerical;

function sum(a: Combinable, b: Combinable) {
  // Type Guard => typeof
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

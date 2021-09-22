type Admin = {
  name: string;
  privilege: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Combine types together.
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Hussein",
  privilege: ["Create", "Read", "Update", "Delete"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numerical = number | boolean;

type Universal = Combinable & Numerical;

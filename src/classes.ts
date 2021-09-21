// Abstract-class enforce different implementation for abstract-method in each class inherits from it.
// you can't instantiate abstract-class, it's just a class that's there to be inherited from.
abstract class Department {
  static fiscalYear = 2021;
  // private readonly id: string;
  // public name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInfo() {
    console.log(`Employees number: ${this.employees.length}`);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("ITDepartment ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in  a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[reports.length - 1];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", ["firstReport"]);
    return this.instance;
  }

  describe() {
    console.log("Accounting department ID: " + this.id);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  printReports() {
    console.log(this.reports);
  }
}

console.log("#".repeat(30), "ITDepartment Class", "#".repeat(30));

const it = new ITDepartment("d1", ["Hussein", "Hatem"]);
it.addEmployee("Max");
it.addEmployee("Jon");
it.describe();
it.printEmployeesInfo();
console.log(it);

console.log("#".repeat(30), "Accounting Class", "#".repeat(30));

const accounting = AccountingDepartment.getInstance();
accounting.describe();
accounting.addEmployee("Tito");
console.log(accounting.mostRecentReport); // getter
accounting.addReport("a");
console.log(accounting.mostRecentReport); // getter
accounting.printReports();
accounting.mostRecentReport = "Year end report"; // setter
console.log(accounting);

console.log("#".repeat(30), "Static-keyword", "#".repeat(30));

// static-keyword -> allowed access method & properties without instantiate-class(without new-keyword)
// static properties & methods not available in this-keyword - it's not instance form the class
const employee1 = Department.createEmployee("employeeOne");
console.log(employee1, Department.fiscalYear);

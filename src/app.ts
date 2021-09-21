class Department {
  // private readonly id: string;
  // public name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInfo() {
    console.log(`Employees number: ${this.employees.length}`);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class Accounting extends Department {
  private lastReport: string;

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

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[reports.length - 1];
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

const it = new ITDepartment("d1", ["Hussein", "Hatem"]);
it.addEmployee("Max");
it.addEmployee("Jon");
it.describe();
it.printEmployeesInfo();
console.log(it);

console.log("#".repeat(70));

const accounting = new Accounting("d1", ["firstReport"]);
accounting.addEmployee("Tito");
console.log(accounting.mostRecentReport);
accounting.addReport("a");
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.mostRecentReport = "Year end report";
console.log(accounting);

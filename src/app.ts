class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department is: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInfo() {
    console.log(`Employees number: ${this.employees.length}`);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Jon");

accounting.describe();
accounting.printEmployeesInfo();

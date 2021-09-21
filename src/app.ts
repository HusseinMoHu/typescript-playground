class Department {
  private id: string;
  name: string;
  private employees: string[] = [];

  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
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

const accounting = new Department("d1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Jon");

accounting.describe();
accounting.printEmployeesInfo();

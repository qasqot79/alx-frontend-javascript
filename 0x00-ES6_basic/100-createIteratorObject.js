export default function createIteratorObject(report) {
  const iterator = {
    departments: Object.keys(report),
    currentDepartmentIndex: 0,
    currentEmployeeIndex: 0,

    next() {
      if (this.currentDepartmentIndex < this.departments.length) {
        const currentDepartment = this.departments[this.currentDepartmentIndex];
        const currentEmployee = report[currentDepartment][this.currentEmployeeIndex];

        this.currentEmployeeIndex++;

        if (this.currentEmployeeIndex >= report[currentDepartment].length) {
          this.currentEmployeeIndex = 0;
          this.currentDepartmentIndex++;
        }

        return { value: currentEmployee, done: false };
      }

      return { done: true };
    },
  };

  return {
    [Symbol.iterator]() {
      return {
        next: iterator.next.bind(iterator),
      };
    },
  };
}

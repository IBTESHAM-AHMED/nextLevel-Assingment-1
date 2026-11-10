// Default parameter: used only when multiplier is undefined, so 0 stays 0.
function multiplyValue(value: number, multiplier: number = 2): number {
	return value * multiplier;
}

// typeof narrows the union, so each branch knows the exact type.
function processInput(input: string | number | boolean): string | number {
	if (typeof input === 'string') {
		return input.trim().toLowerCase();
	} else if (typeof input === 'number') {
		return input * 10;
	} else {
		return input ? 'Active' : 'Inactive';
	}
}

// readonly tuple: the array can be read but not changed inside the function.
function formatCoordinate(coordinates: readonly [number, number, string]): string {
	return `Location: ${coordinates[2]} (${coordinates[0]}, ${coordinates[1]})`;
}

// Rest parameter collects all arrays; loop copies every element in order.
function concatenateArrays<T>(...arrays: T[][]): T[] {
	const concatenatedArray: T[] = [];

	arrays.forEach((array: T[]) => {
		array.forEach((element: T) => {
			concatenatedArray.push(element);
		});
	});

	return concatenatedArray;
}

interface Course {
	title: string;
	students: number;
	isPublished: boolean;
}

// filter returns a new array, so the original is not changed.
function getPopularCourses(courses: Course[], minStudents: number): Course[] {
	return courses.filter((course: Course) => course.isPublished && course.students >= minStudents);
}

// K must be a real key of T, so item[key] is always valid and type-safe.
function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
	return items.map((item: T) => item[key]);
}

// Parameter properties: protected/private fields are created from the constructor.
class Employee {
	constructor(
		protected name: string,
		private baseSalary: number,
	) {}

	getDetails(): string {
		return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
	}
}

// Manager inherits Employee; protected name is accessible here, baseSalary is not.
class Manager extends Employee {
	constructor(
		name: string,
		baseSalary: number,
		private department: string,
	) {
		super(name, baseSalary);
	}

	getRoleInfo(): string {
		return `Manager of ${this.department}: ${this.name}`;
	}
}

// Under 18 rejects at once; 18+ resolves after 1000 ms via setTimeout.
async function validateAgeAsync(age: number): Promise<string> {
	return new Promise((resolve, reject) => {
		if (age >= 18) {
			setTimeout(() => {
				resolve('Access Granted');
			}, 1000);
		} else {
			reject(new Error('Access Denied: Must be 18 or older'));
		}
	});
}

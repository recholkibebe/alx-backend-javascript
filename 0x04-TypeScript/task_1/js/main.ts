// task_1/js/main.ts

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher3: Teacher = {
    firstName: 'Phillip',
    fullTimeEmployee: false,
    lastName: 'Wanjau',
    location: 'Kisumu',
    contract: false,
};

console.log(teacher3);


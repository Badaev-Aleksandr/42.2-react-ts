export interface EmployeeFormValue{
    first_name: string;
    last_name: string;
    age: string;
    position: string;
    terms_of_use: boolean;
}

export enum EMPLOYEE_FORM_NAMES {
    FIRST_NAME = "first_name",
    LAST_NAME = "last_name",
    AGE = "age",
    POSITION = "position",
    TERMS_OF_USE = "terms_of_use"
}

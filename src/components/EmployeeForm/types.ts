export interface EmployeeFormValue{
    first_name: string;
    last_name: string;
    age: string;
    position: string;
    is_agree: boolean;
}

export enum EMPLOYEE_FORM_NAMES {
    FIRST_NAME = "first_name",
    LAST_NAME = "last_name",
    AGE = "age",
    POSITION = "position",
    IS_AGREE = "is_agree"
}

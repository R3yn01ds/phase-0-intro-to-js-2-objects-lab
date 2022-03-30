// Write your solution in this file!


const employee = {
    name: 'Insert Name Here',
    streetAddress: 'Insert Address Here',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
        return {
            ...employee, [key]: value,
        } 
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key ) {
    const remove = { ...employee }
    delete remove[key] 
    return remove 
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key] 
    return employee 
}
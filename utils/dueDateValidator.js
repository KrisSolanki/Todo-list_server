export const dateValidator = (value) => {    
    const dueDate = new Date(value)
    if(isNaN(dueDate.getTime())){
        throw new Error("Please write date in valid format YYYY-MM-DD ")
    }
    const dueDateObj = dueDate.toISOString().split('T')[0];
    const currentDate = new Date().toISOString().split('T')[0];
    if(dueDateObj < currentDate){
        throw new Error("Date must be greater than or equal to today");
    }
}
import { Task ,Category } from "../schema/taskSchema.js";
import { dateValidator } from "../utils/dueDateValidator.js";


//POST Method
export const postTask = async (req, res) => {
    try {
        const { title, description, dueDate , category } = req.body;

        //Validation for title should not be empty
        if (!title || title.trim() === "") {
            return res.status(400).json({ message: "title should not be empty" });
        }
        //Validation so date should not be less than current date {today}
        if (dueDate) {
            try {
                dateValidator(dueDate);
            } catch (error) {
                return res.status(400).json({ message: error.message });
            }
        }
        //Validation for category , if user want to add category ,user can choose existing category
        if(category){
            const existingCategory = await Category.findById(category)
            if(!existingCategory){
                return res.status(404).json({message:"Category not found,please select other category or create new category "})
            } 
        }
        const task = await Task.create({
            title: title,
            description: description,
            dueDate: dueDate || null,
            category: category || null,
        })
        return res.status(200).json({
            message: "Task added successfully", 
            task,
            success: true
        })
    } catch (error) {
        console.error("Error occur while adding task:", error.message)
        return res.status(500).json({
            message: "Error occur while adding task",
            success: false
        })
    }
}

export const getTasks = async (req, res) => {
    try {
        const task = await Task.find().populate('category');;
        
        // Validation for task if there are no task user created.
        if (!task.length) {
            return res.status(404).json({ message: "No task added" })
        }
        return res.status(200).json({ 
            message: "Tasks retrieved successfully", 
            task, 
            suceess: true })
    }
    catch (error) {
        console.error("Error occured while retrieving tasks", error.message)
        return res.status(500).json({ message: "Error occurred while retrieving tasks", success: false })
    }
}

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTask = await Task.findByIdAndDelete(id);
        //Validation for task if task is already deleted or does not exist 
        if (!deleteTask) {
            return res.status(404).json({ message: "Task not found ot already deleted ", sucess: false })
        }
        return res.status(200).json({ message: "Task deleted successfully", success: true })
    } catch (error) {
        console.error("Error occured while deleting a task", error.message);
        return res.status(500).json({ message: "Error occured while deleting task", success: false });
    }
}

export const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const { title, description, dueDate, isCompleted, category , updatedAt } = req.body;

        const existingTask = await Task.findById(taskId);
        
        // Validation for the task that are already marked complete 
        if (existingTask.isCompleted && isCompleted === true) {
            return res.status(400).json({ message: "Task is already marked completed!" });
        }

        // Validation for due date :- should not be less than current date 
        if (dueDate) {
            try {
                dateValidator(dueDate);
            } catch (error) {
                return res.status(400).json({ message: error.message });
            }
        } 

        // Validation for category :- select from existing category (in frontend)
        if(category){
            const existingCategory = await Category.findById(category);
            if(!existingCategory){
                return res.status(400).json({message:"Category not found"})
            }
        }

        const task = await Task.findByIdAndUpdate(
            taskId,
            { title, description, dueDate, isCompleted, category , updatedAt: new Date() },
            { new: true, runValidators: true }
        )
        return res.status(200).json({ message: 'Task updated successfully.', task })
    } catch (error) {
        console.error("Error occured while updating task", error.message)
        return res.status(500).json({ message: "Error occured while updating task" })
    }
}

export const getCategories = async (req,res) => {
    try{
       const categories = await Category.find()

       //Validation if no category added
       if(!categories.length){
        return res.status(404).json({message:"No category added"})
       }
       return res.status(200).json({message:"Categories retrieved successfully",categories,success:true})
    }catch(error){
        console.error("Error occured while retrieving categories:",error.message)
        res.status(500).json({message:"Error occured while retrieving categories"})
    }
}

export const postCategory = async (req,res) => {
    try{
        const { name } = req.body;
        //Validation for name should not be empty 
        if(!name || name.trim() === ""){
            return res.status(400).json({message:"Category name should not empty"})
        }
        const category = await Category.create({
            name:name
        })
        return res.status(200).json({message:"Category added successfully",category,success:true})
    }catch(error){
        console.error("Error occured while adding category:",error.message)
        return res.status(500).json({message:"Error occured while adding category"})
    }
}

export const deleteCategory = async (req,res) => {
    try{
        const { id } = req.params;
        const deleteCategoryObj = await Category.findByIdAndDelete(id);
        if(!deleteCategoryObj){
            return res.status(404).json({message:"Category not found or already deleted"})
        }
        return res.status(200).json({message:"Category deleted successfully"})
    }catch(error){
        console.error("Error occured while deleting category",error.message)
        return res.status(500).json({message:"Error occcured while deleting category"})
    }
} 

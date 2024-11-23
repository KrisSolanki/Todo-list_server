import express from 'express';
import { deleteTask, getTasks,getCategories, postCategory, postTask, updateTask, deleteCategory, getCategorizedTask } from './controller/taskController.js';

const router = express.Router();

// this api retrieves all the tasks
// http://localhost:4000/api/task
router.get('/task',getTasks);

// this api creates a task
// http://localhost:4000/api/task
router.post('/task',postTask);

// this api deletes a task 
// http://localhost:4000/api/task/6740aa8f1ce4a079f0872ff #taskId
router.delete('/task/:id',deleteTask);

// this api updates task whether it is title,description,due date,isComplete
// http://localhost:4000/api/task/6740a7115e7f5ede5b32661b #taskId 
router.patch('/task/:id',updateTask);

// this api creates a category 
// http://localhost:4000/api/category
router.post('/category',postCategory)

// this api retrieves all the categories  
// http://localhost:4000/api/category
router.get('/category',getCategories)

// this api deletes a category 
// http://localhost:4000/api/category/6740b0a51cbdc580efb587e4  #categoryId
router.delete('/category/:id',deleteCategory)

// this api gets all the task which has same category  
// http://localhost:4000/api/category/674188df897cf9fc866a059d  #categoryId
router.get('/category/:id', getCategorizedTask);

export default router;
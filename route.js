import express from 'express';
import { deleteTask, getTasks,getCategories, postCategory, postTask, updateTask, deleteCategory } from './controller/taskController.js';

const router = express.Router();

router.get('/task',getTasks);
router.post('/task',postTask);
router.delete('/task/:id',deleteTask);
router.patch('/task/:id',updateTask);

router.post('/category',postCategory)
router.get('/category',getCategories)
router.delete('/category/:id',deleteCategory)

export default router;
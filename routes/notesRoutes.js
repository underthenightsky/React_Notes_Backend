import express from 'express';
const router = express.Router();
import  {getNotes,createNote,deleteNote,
    // getNoteData,updateNote
} from '../controllers/notesController.js';

router.get('/', getNotes);
router.post('/', createNote);
router.delete('/:id', deleteNote);
// router.get("/edit",getNoteData);
// router.post("/edit/:id",updateNote);

export default  router

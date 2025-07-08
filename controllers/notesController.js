let notes = []; // In-memory DB for simplicity
let idCounter = 1;
import { noteModel } from "../models/noteModel.ts";

export async function getNotes(req, res) {
  try {
    const { search } = req.query;
    let filteredNotes = await noteModel.find({});

    if (search) {
      // if the search iinput has a #it means the user is searching for a tag otherwise we asssume they are seaching for a title
      if (search.includes("#")) {
        filteredNotes = filteredNotes.filter((note) =>
          note.tags.includes(search)
        );
      } else {
        filteredNotes = filteredNotes.filter((note) =>
          note.title.toLowerCase().includes(search.toLowerCase())
        );
      }
    }

    res.status(201).json(filteredNotes);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function createNote(req, res) {
  try {
    let { title, content, tags } = req.body;
    if (tags) {
      for (let i = 0; i < tags.length; i++) {
        tags[i] = "#" + tags[i];
      }
    }
    const newNote = new noteModel({
      title: title,
      content: content,
      tags: tags || [],
    });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

export async function deleteNote(req, res) {
  const { id } = req.params;
  notes = notes.filter((note) => note.id !== parseInt(id));
  await noteModel.findByIdAndDelete(id);
  res.status(204).json({ message: "success" });
}

// export async function getNoteData(req,res){
//   try{
//     console.log(req)
//   const {id} =req.query;
//   console.log("id recieved at getdata controller", id)
//   const note = await noteModel.findOne({_id:id});
//   res.status(201).json(note);
//   }
//   catch(error){
//     console.log(error);
//     res.status(500).json(error)
//   } 

// }

// export async function updateNote(req,res){
//   try{
//     const {id}=req.params;
//     const {title,content,tags} =req.body;
//     await noteModel.updateOne({_id:id},{
//       $set:{title:title,content:content,tags:tags}
//     })
//     return res.status(201).json("Success")
//   }
//   catch(error){
//     console.log(error);
//     return res.status(500).json("Error while editing note date ",error)
//   }
// }
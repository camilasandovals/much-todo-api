import { db } from "./dbConnect.js"

const coll = db.collection('tasks')

export async function addNewItem(req, res){
    const newItem = req.body 
    await coll.add(newItem)
    getAllitems(req, res)
}

export async function getAllitems(req, res) {
    const itemsMessy = await coll.get()
    const itemsClean = itemsMessy.docs.map(doc => ({...doc.data(), id: doc.id}))
    res.send(itemsClean)
}


export async function deleteItem(req, res) {

}

// export async function deleteEmployee(req, res) {
//     const { id } = req.params;
//     // const id = req.params.id
//     await coll.doc(id).delete();
//     res.status(202).send("Employee has been deleted")
//   }
  
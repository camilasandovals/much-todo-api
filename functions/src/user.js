import { FieldValue } from "firebase-admin/firestore";
import { db } from "./dbConnect.js"

const collection = db.collection("users")

export async function signup (req, res){
    const { email , password } = req.body;
    if ( !email || password.length < 6) {
        res.status(400).send({
            message: 
            "Email and password are required. Password must be 6 characters of long"
        });
        return;
    }
}

//check if email is already in use

const newUser = {

}

//stop project ... to be continued
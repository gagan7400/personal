import React, { useState } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, deleteField } from "firebase/firestore";
import { db } from './firebaseconfig';

const Form = () => {
    const [name, setname] = useState("")
    const [course, setcourse] = useState("")
    const [year, setyear] = useState("");
    const [data, setdata] = useState([])
    let submithandler = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "students"), { name, course, year })
                .then((result) => {
                    console.log(result.id)
                });
        }
        catch (err) {
            console.log(err)
        }

    }
    let getdata = async () => {

        let f = []
        await getDocs(collection(db, "students"))
            .then((result) => {
                result.forEach((a) => {
                    f.push({ id: a.id, data: a.data() })
                });
                setdata(f);
            })
    }
    let deleted = async () => {
        await deleteDoc(doc(db, "students", 'vAkZEzKo1CO6Cou6QFOJ')).then((Res) => console.log(Res))
    }
    let updated = async () => {
        await updateDoc(doc(db, "students", "4312DKHprOHynLfe1RMz"), { course: "bcom" })
    }
    return (
        <div>
            <button onClick={getdata}>getdata</button>
            <button onClick={deleted}>deleted</button>
            <button onClick={updated}>updated</button>

            {console.log(data)}
            <form onSubmit={submithandler} >
                <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} />
                <input type="text" value={course} onChange={(e) => { setcourse(e.target.value) }} />
                <input type="text" value={year} onChange={(e) => { setyear(e.target.value) }} />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Form;

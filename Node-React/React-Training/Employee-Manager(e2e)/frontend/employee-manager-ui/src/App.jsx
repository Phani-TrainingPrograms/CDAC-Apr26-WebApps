import { useEffect, useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import EmpCard from "./components/empCard"
import EmpForm from "./components/empForm"
import EmpList from "./components/empList"
import { addRec, deleteRec, getAll, updateRec } from "./services/empService"

//useState hook for storing employees,
//useEffect for making background api calls. 
function App() {
  const [ empList, setEmpList ] = useState([])
  const [ editRec, setEditRec ] = useState([null]) //null means the add function should work.

  const loadRecords = async () =>{
    const res = await getAll();
    setEditRec(null)
    setEmpList(res.data)
  }
  
  const handleAdd = async(emp)=>{
    await addRec(emp);
    loadRecords();
  }

  const handleUpdate = async(id, emp)=>{
    await updateRec(id, rec);
    setEditRec(null);//after update is completed. 
    loadRecords();
  }

  const handleDelete = async(id)=>{
    await deleteRec(id);
    loadRecords();
  }

  useEffect(()=>{
    loadRecords()
  }, [])

  return (
    <>
     <EmpList data = {empList} onDelete={handleDelete} onUpdate = {setEditRec}  />
     <EmpForm onAdd = {handleAdd} editRec = {editRec} onUpdate = {handleUpdate}/>
    </>
   )
}

export default App

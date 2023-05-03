import React, { useState } from "react";

const Todo = () => {
  const [inputs, setInputs] = useState({
    name: "",
  
  });
  
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputs", inputs);
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
    
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ name: tempData.name, email: tempData.email });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <div className="Container-fluid">
    <div className="row form justify-content-center">
    <div className ="col-11 todo">
    <h1 className ="mt-3" style={{color:'white', textAlign:'center',fontSize:'40px'}}><u>ToDo App</u></h1>
    <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="name ms-5 mt-5" style ={{textAlign:'center', color:'white',fontSize:'25px'}}>Enter your task</label><br></br>
            <textarea className="field ms-5" name="name" value={inputs.name} onChange={handleChange}>
            </textarea>
          </div><br></br>
      
    <button type="submit" className="mybtn" style ={{color:'white'}}>
            {editClick ? "Update" : "Submit"}
          </button>
       <br></br>
       </form>
      <div>

          <table className="table table-dark table-striped table-hover"style={{color:'white', width:'65%', marginLeft:'15%', fontSize:'25px'}}>
  <thead>
    <tr>
      <th scope="col" className="ms-3">Your task</th>
   
      <th scope="col" className="ms-3">Action</th>
    </tr>
  </thead>
          <tbody className="text-white" style ={{color:'white', textAlign:"justify"}}>
            {tableData.map((item, i) => (
              <tr>
                <td>{item.name}</td>
                {/* <td>{item.email}</td>
                <td>{item.bloodgroup}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.fathersname}</td>
                <td>{item.mothersname}</td>
                <td >{item.numberofsiblings}</td> */}
                <td>
                  <button
                    onClick={() => handleEdit(i)}
                    className="mr-3 text-yellow-300"
                  >
                  <span class="material-symbols-outlined bg-secondary">
edit
</span>
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-red-500"
                  >
                  <span class="material-symbols-outlined bg-secondary">
delete
</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Todo;

         
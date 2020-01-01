import React, {useState} from "react"


function Form() {

      const [name, setName] = useState("")
      const [age, setAge] = useState("")
  
      
    return (
        <form>
        <input type="text" placeholder="Name" name="inputName" value={name} onChange={e => setName(e.target.value)} required />
          <input type="text" placeholder="Age" name="inputAge" value={age} onChange={e => setAge(e.target.value)} required/>
          <br></br>
          <button type="submit" >Create Node</button>
        </form>

        
    );
}

export default Form
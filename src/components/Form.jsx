import { useState } from 'react';


const Form = ({ onAdd }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(!name){
        alert('Please add a name');
        return
    }
    onAdd({ name, email, course, id });
    setId('');
    setName('');
    setEmail('');
    setCourse("");
}

    return ( 
      <div className="p-2" style={{width: "100%"}}>
        <h3 className="mt-4 mb-4 add">Add Students </h3>
      <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label"> Student Id </label>
        <input type="text" className="form-control" value={id}
        onChange={(e) => setId(e.target.value)} />    
      </div>
      <div className="mb-3">
        <label className="form-label"> Name </label>
        <input type="text" className="form-control" value={name}
        onChange={(e) => setName(e.target.value)} />    
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Course </label>
        <input type="text" className="form-control" value={course}
       onChange={(e) => setCourse(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-primary shadow-none mt-2">SUBMIT</button>
    </form>
    </div>
     );
}
 
export default Form;
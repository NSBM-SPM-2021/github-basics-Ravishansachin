import logo from './logo.svg';
import './App.css';
import DetailsTable from './components/DetailsTable';
import { useState, useEffect } from 'react';
import Form from './components/Form';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {

    const getStudents = async () => {

      const studentsFromServer = await fetchStudents();
     // console.log(studentsFromServer);
      setStudents(studentsFromServer);

    }

    getStudents();

  }, [])

  const fetchStudents = async () => {
    const res = await fetch("http://localhost:5000/students");
    const data = await res.json();  
    return data; 
  }

  const addStudents = async (student) => {
    const res = await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(student)
    })
    const data = await res.json()
  setStudents([...students, data]);
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light nav-light fixed">
    <a class="navbar-brand brand">Students Management</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">

        </div>
    </div>
</nav>
      <div className="container-fluid ">

        <div className="row mt-2">

          <div className="col-7">
          <img src="https://cdn.pixabay.com/photo/2015/05/19/14/55/educational-773651_960_720.jpg" class="card-img-top" alt="..."/>
            <div className="m-3 pt-3 DetailsTable">
          
              <DetailsTable students={students} />
            </div>

          </div>

          <div className="col-5">

         <Form onAdd={addStudents} />

          </div>

        </div>

      </div>
    </>

  );
}

export default App;

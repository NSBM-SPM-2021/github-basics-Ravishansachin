import logo from './logo.svg';
import './App.css';
import DetailsTable from './components/DetailsTable';
import { useState, useEffect } from 'react';

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

  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Student Management System</span>
        </div>
      </nav>
      <div className="container-fluid ">

        <div className="row mt-2">

          <div className="col-7">
            <div className="m-3 pt-3">
              <DetailsTable students={students} />
            </div>

          </div>

          <div className="col-5">

            <h1>hello world</h1>


          </div>

        </div>

      </div>
    </>

  );
}

export default App;

import './App.css';
import DetailsTable from './components/DetailsTable';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import firebaseRef from './firebase';

function App() {
  const [students, setStudents] = useState([]);

  const ref = firebaseRef.firestore().collection("students");

  function getStudents() {
    ref.onSnapshot((querySnapshot) => {
      const items =[];
      querySnapshot.forEach((doc) => {
       // console.log(doc);
        console.log(typeof doc.data);
        items.push({...doc.data()});
      });
      setStudents(items);
    })

  }
  useEffect(() => {
    getStudents();

  })
  const addStudents = (student) => {

    const userRef = firebaseRef.firestore().collection("students").add({
      id: student.id,
      name: student.name,
      email: student.email,
      course: student.course
    }); 
    setStudents([...students, userRef]);
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light nav-light fixed">
    <a href="!#" class="navbar-brand brand">Students Management System</a>
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
          <img src="/sclgirl.png" class="card-img-top" alt="..."/>
         <Form onAdd={addStudents} />

          </div>

        </div>

      </div>
    </>

  );
}

export default App;

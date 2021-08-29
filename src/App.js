import logo from './logo.svg';
import './App.css';
import DetailsTable from './components/DetailsTable';

function App() {
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
        <DetailsTable/>
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

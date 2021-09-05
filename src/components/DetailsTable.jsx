



const DetailsTable = ({students}) => {

console.log(students)

    return ( 

        <>

<table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">COURSE</th>
    </tr>
  </thead>
  
  <tbody>
  {students.map((student) => (
    <tr>
      <th scope="row">{student.id}</th>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.course}</td>
    </tr>
))}
    
  </tbody>
</table>
        </>

     );

}

 

export default DetailsTable;
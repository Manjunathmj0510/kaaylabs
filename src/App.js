import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { data } from './reducer';

function App() {
  const value = useSelector(state => state.persistedReducer.value)
  console.log(value)
  const[page,setPage] = useState(1)
  const dispatch = useDispatch()
  useEffect(()=>{
    axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`).then(res=>dispatch(data(res.data)))
  },[page])
  
  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>PH</th>
          <th>SRM</th>
          <th>TAGLINE</th>
          <th>TARGET FG</th>
          <th>TARGET OG</th>
        </tr>
      </thead>
      <tbody>
        {value.map(res => 
        <tr>
          <td>{res.id}</td>
          <td>{res.name}</td>
          <td>{res.ph}</td>
          <td>{res.srm}</td>
          <td>{res.tagline}</td>
          <td>{res.target_fg}</td>
          <td>{res.target_og}</td>
        </tr>)}
      </tbody>
    </Table>
    <Pagination>
    <Pagination.Prev />
    {value.map((number,index) => 
    <Pagination.Item key={number.id} active={number === page} onClick={()=>setPage(index+1)}>
      {index+1}
    </Pagination.Item>)}
    <Pagination.Next />
      </Pagination>
    </>
  );
}

export default App;
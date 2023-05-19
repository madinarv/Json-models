import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'antd';

function Users() {
  const [data,setData]= useState([])
  useEffect(()=> {
    axios.get('http://localhost:8000/users')
    .then(res => setData(res.data[0]))
    .catch(err =>console.log(err))
  },[])

    const columns = [
    { title: 'ID', dataIndex: 'id',key:"1" },
    { title: 'Name', dataIndex: 'name', key:"2" },
    { title: 'Email', dataIndex: 'email' ,key:"3" },
    { title: 'Region', dataIndex: 'region',key:"4" },
    { title: 'Phone', dataIndex: 'phone',key:"5" }
  ];
  return (
    <div>
      
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Users
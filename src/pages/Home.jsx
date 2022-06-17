import React, { useEffect, useState } from 'react'
import styled  from 'styled-components';
import ListUsers from '../components/ListUsers';

const Heading = styled.h1`
    text-align: center;
    color: #eaeaea;
`

const Home = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    },[])

    const loadUsers = async () => {
        const response = await fetch('http://localhost:8000/users')
        const data = await response.json()
        console.log(data);
        setUsers(data)
    }

  return (
    <div>
        <Heading>CRUD APP by Nitin</Heading>
        <div>
            <ListUsers users={users} />
        </div>
    </div>
  )
}

export default Home
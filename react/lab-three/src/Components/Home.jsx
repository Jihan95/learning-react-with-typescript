import {useState} from 'react';
import {v4 as uuid} from "uuid";
import Form from './Form';
import UserCard from './UserCard';
import "./home.css";

const Home = () => {
    const [users, setUsers] = useState([
        {id: uuid(), name: "Ahmed", age: 20, email: "ahmed@example.com"},
        {id: uuid(), name: "Mona", age: 25, email: "mona@example.com"},
        {id: uuid(), name: "Omar", age: 30, email: "omar@example.com"},
        {id: uuid(), name: "Gana", age: 12, email: "gana@example.com"},
        {id: uuid(), name: "Yossef", age: 60, email: "yossef@example.com"},
        {id: uuid(), name: "Laila", age: 28, email: "laila@example.com"},
        {id: uuid(), name: "Karim", age: 35, email: "karim@example.com"},
        {id: uuid(), name: "Dalia", age: 22, email: "dalia@example.com"},
        {id: uuid(), name: "Samir", age: 40, email: "samir@example.com"},
        {id: uuid(), name: "Nada", age: 18, email: "nada@example.com"}
    ])

    //method to add user to my users
    const addUser =(user) => {
        setUsers([...users, {...user, id: uuid(), age:+user.age}])
    }

    //method to increment user age
    const incrementAge = (userId) => {
        setUsers(oldUsers => 
            oldUsers.map(user => 
            user.id === userId ? {...user, age: user.age + 1} : user
            )
        );
    }
    
    return (
            <>
                <Form addUser={addUser}  className="form"/>
                <div className='container'>
                    {users.map((user) => (
                        <UserCard 
                            key={user.id} 
                            name={user.name} 
                            age={user.age} 
                            email={user.email} 
                            incrementAge={() => incrementAge(user.id)} 
                        />
                    ))}
                </div>
            </>

    );
}

export default Home;

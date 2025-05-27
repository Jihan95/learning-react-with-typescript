import {useState} from 'react';

const Form = ({addUser}) => {
    const [user, setUser] = useState({ name: "", age: "", email: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(user)
        setUser({ name: "", age: "", email: "" })
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({ ...user, [name] : value }) 
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <br></br>
            <input type="text" name="name" id="name" value={user.name} onChange={handleChange}/>
            <br></br>
            <label htmlFor="email">Email:</label>
            <br></br>
            <input type="email" name="email" id="email" value={user.email} onChange={handleChange}/>
            <br></br>
            <label htmlFor="age">age:</label>
            <br></br>
            <input type="number" name="age" id="age" value={user.age} onChange={handleChange}/>
            <br></br>
            <input type="submit" value="Add User"/>
        </form>
    );
}

export default Form;

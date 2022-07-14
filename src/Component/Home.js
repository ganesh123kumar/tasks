import React, { useState } from 'react'
import './Home.css'
const Home = () => {

    const [name, setname] = useState("")
    const [cocktail, setcocktail] = useState("")
    const [points, setpoints] = useState("")

    const [edit, setedit] = useState(false)
    const [selected, setselected] = useState(null)

    const [users, setusers] = useState([])


    const handleAddUser = (e) => {
        e.preventDefault();
        const user = {
            name,
            cocktail,
            points
        }
        if(edit){
            let value = users;

            // Below command used from Stack Overflow
            Object.assign(value[selected],user)
            setusers([...value])
            setedit(false)
            setselected(null)
        }else{
          setusers([...users, user])
        }
      handleReset()
    }


    const handleEdit = (index) => {
        const user = users[index];
        setname(user.name)
        setcocktail(user.cocktail)
        setpoints(user.points)
        setedit(true);
        setselected(index);
    }

    const deleteUser = (user) => {
        const value = users.filter((item)=> item !== user);
        setusers([...value]);
    }

    const handleReset = () => {
        setname("")
        setcocktail("")
        setpoints("")
    }
    return (
        <>
            <div className="home_container">

                <div className="first_container">
                    <h1 className='title'>Add Entry</h1>
                    <form onSubmit={handleAddUser}>
                        <div className="form-group">
                            <label >Name</label>
                            <input type="text" className='form-control' value={name} onChange={(e) => setname(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label >Select Cocktail</label>
                            <select value={cocktail} onChange={(e) => setcocktail(e.target.value)} required>

                                <option ></option>
                                <option value="Malta">Malta</option>
                                <option value="Santra">Santra</option>
                                <option value="Sanfee">Sanfee</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label >Points (0-10)</label>
                            <input type="number" min='1' max='10' value={points} onChange={(e) => setpoints(e.target.value)} required />
                        </div>
                        <div className='button_style '>
                            <button className='button_style button_25'>
                                {
                                    edit ? "Update user" : "Add user"
                                }
                            </button>
                            <button className='button_style button_25' onClick={handleReset} >Reset</button>
                        </div>
                    </form>
                </div>

                <div className="second_container">
                    <h1 className='title'>Entries</h1>
                    <table className='style_table' >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Cocktail</th>
                                <th>Points Given</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{user.name}</td>
                                            <td>{user.cocktail}</td>
                                            <td>{user.points}</td>
                                            <td>
                                                <button className='button_25' onClick={()=> handleEdit(index)}>
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button className='button_25' onClick={()=> deleteUser(user)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Home
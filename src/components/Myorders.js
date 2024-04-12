import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import Home from './Home';
import Foods from './Foods';
import Contactus from './Contactus'
import { Routes, Route, NavLink ,Navigate} from 'react-router-dom'

function Myorders() {

    let { register, handleSubmit, setValue } = useForm()
    let [users, setUsers] = useState([])
    let [editUser, setEditUser] = useState({
        status: false,
        id: 0
    })


    //get users 
    useEffect(() => {
        getUsers()
    },
        []
    )


    //get users
    const getUsers = async () => {
        let response = await axios.get("http://localhost:4000/users")
        setUsers(response.data)
    }

    //delete user
    const deleteUserById = async (id) => {
        let response = await axios.delete(`http://localhost:4000/users/${id}`)
        getUsers()

    }

    //edit user
    const editUserById = (userObj) => {

        setEditUser({ ...editUser, status: true, id: userObj.id })
        setValue("ordername", userObj.ordername)
        setValue("customername", userObj.customername)
        setValue("address", userObj.address)
    }


    //save user
    const saveUserById = async (modifiedUser) => {
        modifiedUser.id = editUser.id
        let id = modifiedUser.id;
        let response = await axios.put(`http://localhost:4000/users/${id}`, modifiedUser)
        setEditUser({ ...editUser, status: false })
        getUsers()

    }

    return (
        <div className='text-center mt-5 container pt-5'>








            <p className="display-3 fw-bold text-dark mb-5"><i>List Of Orders</i></p>
            {/* empty list */}
            {users.length === 0 && <p className='text-danger fw-bold mb-5 pb-5 mt-4'>You haven't placed any order</p>}
            {users.length !== 0 &&
                <form onSubmit={handleSubmit(saveUserById)}>
                    <table className="table mb-5" style={{backgroundColor:"ButtonShadow"}}>
                        <thead>
                            <tr>
                                <th>Ordername</th>
                                <th>Customer Name</th>
                                <th>Address</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                users.map((userObj) => <tr key={userObj.id}>
                                    <td>
                                        {editUser.status === true && editUser.id === userObj.id ?
                                            <input type="text" id="" {...register("ordername")}  /> : <> {userObj.ordername}</>
                                        }


                                    </td>
                                    <td>
                                        {editUser.status === true && editUser.id === userObj.id ?
                                            <input type="text" id="" {...register("customername")} /> : <> {userObj.customername}</>
                                        }
                                    </td>
                                    <td>
                                        {editUser.status === true && editUser.id === userObj.id ?
                                            <input type="text" id="" {...register("address")} /> : <> {userObj.address}</>
                                        }
                                    </td>
                                    <td>
                                        {editUser.status === true && editUser.id === userObj.id ?


                                            <input type="submit" className="btn btn-success" value="Save" /> :
                                            <>
                                                <button type="button" className="btn btn-warning m-1" onClick={() => editUserById(userObj)}>Edit</button>
                                                <button type="button" className="btn btn-danger m-1" onClick={() => deleteUserById(userObj.id)}>x</button>
                                            </>
                                        }


                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </form>


            }

        </div>
    )
}

export default Myorders;

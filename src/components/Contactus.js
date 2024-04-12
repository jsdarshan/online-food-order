import Home from './Home';
import Myorders from './Myorders';
import Foods from './Foods';
import { Routes, Route, NavLink ,Navigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useEffect,useState} from 'react'

function Contactus()
{
    

  let { register, handleSubmit, formState: { errors } } = useForm()
  //let navigate = useNavigate()

  //form submit
  const onFormSubmit = async (contactObj) => {
   console.log(contactObj);
    //make http post req to create user resource
    let response = await axios.post('http://localhost:5000/contacts', contactObj)

    // if (response.status === 201) {
    //   //navigate to userlist component
    //   navigate("./Myorders")
    // }

  }

     
    



    return (
        // <div>
        //       <div className='container text-center mt-5'>
        //           <h1>CONTACT FORM</h1>
        //           <form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
        //               <input type="text" {...register("userName")} className='form-control mb-3' placeholder='your name'/>
        //               <input type="email" {...register("userEmail")} className='form-control mb-3' placeholder='your email'/>
        //               <input type="text" {...register("userDoubt")} className='form-control mb-3' placeholder='your doubt'/>
        //               <button type="submit" className='btn btn-warning'>SUBMIT</button>
        //           </form>
        //       </div>
        //    </div>

        <div className='mt-5 fw-bold pt-5'>
      <p className="display-4npm  text-dark text-center"><i>CONTACT US</i></p>
      <hr />

      <div className="row mx-auto">
        <div className=" col-11 col-sm-8 col-md-6 mx-auto">
          <form className='bg-secondary p-4' onSubmit={handleSubmit(onFormSubmit)}>
            {/* username */}
            <div className="mb-3">
              <label htmlFor="un">User Name</label>
              <input type="text" id="" className="form-control" {...register("username", { required: true })} />
              {/* validation error on username */}
              {errors.username?.type === 'required' && <p className='text-danger fw-bold'>* Username required</p>}
            </div>
            {/* email */}
            <div className="mb-3">
              <label htmlFor="em">User Email</label>
              <input type="email" id="" className="form-control" {...register("useremail", { required: true })} />
              {/* validation error on email */}
              {errors.useremail?.type === 'required' && <p className='text-danger fw-bold'>* email required</p>}
            </div>
            {/* doubt */}
            {/* <textarea name="comment" form="usrform">Enter text here...</textarea> */}
            <div className="mb-3">
              <label htmlFor="do">Enter your doubt...</label>
              <input type="text" id="" className="form-control" {...register("userdoubt", { required: true })} />
              {/* validation error on email */}
              {errors.userdoubt?.type === 'required' && <p className='text-danger fw-bold'>* required</p>}
            </div>
            
            {/* submit */}
            <button className="btn btn-success d-block mx-auto">Submit</button>
          </form>
        </div>
      </div>


    </div>
    )

}
export default Contactus;
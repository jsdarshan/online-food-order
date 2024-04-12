import React from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Myorders from './Myorders';


function Order() {

  let { register, handleSubmit, formState: { errors } } = useForm()
  let navigate = useNavigate()

  //form submit
  const onFormSubmit = async (userObj) => {
    // console.log(userObj);
    //make http post req to create user resource
    let response = await axios.post('http://localhost:4000/users', userObj)

    // if (response.status === 201) {
    //   //navigate to userlist component
    //   navigate("./Myorders")
    // }

  }




  return (
    <div className='mt-5 fw-bold'>
      <p className="display-2  text-secondary fw-bold text-center mt-5 pt-5">ORDER DETAILS</p>
      <hr />

      <div className="row mx-auto">
        <div className=" col-11 col-sm-8 col-md-6 mx-auto">
          <form className='bg-warning p-4' onSubmit={handleSubmit(onFormSubmit)}>
            {/* username */}
            <div className="mb-3">
              <label htmlFor="un">Order Name</label>
              <input type="text" id="" className="form-control" {...register("ordername", { required: true })} />
              {/* validation error on username */}
              {errors.ordername?.type === 'required' && <p className='text-danger fw-bold'>* Ordername required</p>}
            </div>
            {/* email */}
            <div className="mb-3">
              <label htmlFor="em">Customer Name</label>
              <input type="text" id="" className="form-control" {...register("customername", { required: true })} />
              {/* validation error on email */}
              {errors.customername?.type === 'required' && <p className='text-danger fw-bold'>* Name required</p>}
            </div>
            {/* address */}
            <div className="mb-3">
              <label htmlFor="ad">Address</label>
              <input type="text" id="" className="form-control" {...register("address", { required: true })} />
              {/* validation error on address */}
              {errors.address?.type === 'required' && <p className='text-danger fw-bold'>* Address required</p>}
            </div>
            {/* submit */}
            <button className="btn btn-success d-block mx-auto">Add Item</button>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Order;

import Home from './Home';
import Myorders from './Myorders';
import 'bootstrap/dist/css/bootstrap.css';
import Contactus from './Contactus'
import { Routes, Route, NavLink ,Navigate,Link} from 'react-router-dom'
import Order from './Order'

function Foods(){

    let productsList = [
        {
            productName: "Mixed-Fruit Dessert",
            productImage: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            productName: "Black-Forest Cake",
            productImage: "https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            productName: "Cheesy-Pizza",
            productImage: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            productName: "Chineese Noodles",
            productImage: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            productName:"Veg Fried Rice",
            productImage:"https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            productName:"Veg Burger",
            productImage:"https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }

    ]





    return(
        <div>
           <div className="container mt-5 mb-5" >
    
    <div className="row mt-5 pt-5">
        <div className="col-md-4 col-sm-6 col-8">
            <div className="card mt-5 shadow" >
                
                <img src={productsList[0].productImage} className="w-100"  alt=""/>
               
                <div className="card-body">
                     <h5 className="card-title text-dark text-center">Mixed-Fruit Dessert</h5>
                     
                    
                    
                     <button className="btn btn-secondary" ><Link to="/Order" className='text-decoration-none text-white fw-bold'>ORDER NOW</Link></button>
                    
                     
                     {/* <div className="modal fade" id="m" data-bs-backdrop="static">
                         
                         <div className="modal-dialog modal-dialog-centered">
                             <div className="modal-content">
                                 <div className="modal-header">
                    
                                    <h4>ASUS</h4>
                                     
                                     
                                     <button className="btn-close btn-danger" data-bs-dismiss="modal" ></button>
                                    
                                 </div>
                                 <div className="modal-body">
                                     
                                     <div className="row" >
                                         <div className="col-sm-4 col-4 d-flex align-items-center">
               
               
                                             <img src={productsList[0].productImage}  alt="" className="w-100 shadow rounded"/>
                                         </div>
                                         <div className="col-sm-8 col-8">
                                             <h4>Chromebook Flip C214</h4>
                                             <ul>
                                                 <li>Price: Rs.1599.00</li>
                                                 <li>Product Code: 460903464001</li>
                                                 <li>Commodity: Men's Sports Shoes</li>
                                                 <li>Colour: White</li>
                                                 <li>Warranty: 1 Month</li>
                                                 <li>Country of origin: India</li>
                                                    

                                             </ul>
                                            
                                         </div>
                                     </div>
                                 </div>
                                 <div className="modal-footer">
                                     <button className="btn btn-success">Order</button>
                                 </div>
                             </div>
                         </div>
                     </div> */}
             
             


             </div>
                </div>

                 </div>
                 <div className="col-md-4 col-sm-6 col-8">
                 <div className="card mt-5 shadow" >
                
                <img src={productsList[1].productImage} className="w-100"  alt=""/>
               
                <div className="card-body pt-3">
                     <h5 className="card-title text-dark text-center">Black-Forest Cake</h5>
                     
                    
                     <button className="btn btn-secondary" ><Link to="/Order" className='text-decoration-none text-white fw-bold'>ORDER NOW</Link></button>
               
                     </div>
            </div> 
            </div> 
            <div className="col-md-4 col-sm-6 col-8">
                 <div className="card mt-5 shadow" >
                
                <img src={productsList[2].productImage} className="w-100"  alt=""/>
               
                <div className="card-body pt-3">
                     <h5 className="card-title text-dark text-center">Cheesy-Pizza</h5>
                     
                    
                     <button className="btn btn-secondary" ><Link to="/Order" className='text-decoration-none text-white fw-bold'>ORDER NOW</Link></button>
               
                     </div>
            </div> 
            </div> 
            <div className="col-md-4 col-sm-6 col-8">
                 <div className="card mt-5 shadow" >
                
                <img src={productsList[3].productImage} className="w-100"  alt=""/>
               
                <div className="card-body pt-3">
                     <h5 className="card-title text-dark text-center">Chineese Noodles</h5>
                     
                    
                     <button className="btn btn-secondary" ><Link to="/Order" className='text-decoration-none text-white fw-bold'>ORDER NOW</Link></button>
               
                     </div>
            </div> 
            </div> 
            <div className="col-md-4 col-sm-6 col-8">
                 <div className="card mt-5 shadow" >
                
                <img src={productsList[4].productImage} className="w-100"  alt=""/>
               
                <div className="card-body pt-3">
                     <h5 className="card-title text-dark text-center">Veg Fried Rice</h5>
                     
                    
                     <button className="btn btn-secondary" ><Link to="/Order" className='text-decoration-none text-white fw-bold'>ORDER NOW</Link></button>
               
                     </div>
            </div> 
            </div> 
            <div className="col-md-4 col-sm-6 col-8">
                 <div className="card mt-5 shadow" >
                
                <img src={productsList[5].productImage} className="w-100"  alt=""/>
               
                <div className="card-body pt-3">
                     <h5 className="card-title text-dark text-center">Veg Burger</h5>
                     
                    
                     <button className="btn btn-secondary" ><Link to="/Order" className='text-decoration-none text-white fw-bold'>ORDER NOW</Link></button>
               
                     </div>
            </div> 
            </div> 
            
         </div>






        </div>
        </div>

    );
}
export default Foods;
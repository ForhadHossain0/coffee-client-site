/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCart = ({ coffee ,remainCoffee,setRemainCoffee }) => {
  const { _id , name, supplier, category, photo, quantity, taste, details } = coffee;

  const handleDelete = (_id) =>{
    console.log(_id)


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.isConfirmed) { 
          fetch(`http://localhost:5000/coffee/${_id}` , { 
              method:'DELETE',
           })
    .then(res =>res.json())
    .then(data => {
        if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'Your coffee has been deleted.',
              'success'
            )
      const remaining = remainCoffee.filter(x  => x._id !== _id);
      setRemainCoffee(remaining);
      console.log(setRemainCoffee)
          }
        })
      }
    })
  }

  return (

 <div className="">
       <div className="card  w-[500px] h-[300px] card-side bg-base-100  p-5 rounded-none  shadow-xl">
        <figure>  <img src={photo} alt="Movie" className=" w-[200px] flex h-[200px]" /> </figure>
       
        <div className="w-[300px]  flex justify-between items-center font-bold text-left ">
          <div className="space-y-3 ml-3 text-slate-500 ">
            <p>Name : {name}</p>
            <p>Category : {category}</p>
            <p>Supplier : {supplier}</p>
            <p>Quantity : {quantity}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical space-y-2 ">
              <button className="btn ">👁️‍🗨️</button>
              <Link to={`/data-update/${_id}`}><button className="btn bg-[#dfdbdb] ">✏️</button></Link>
              <button onClick={()=>handleDelete(_id)} className="btn bg-red-600 text-white">X</button>
            </div>
          </div>
        </div>

      </div>
 </div>
    
  );
};

export default CoffeeCart;
 
import Swal from 'sweetalert2'
import { Link, useLoaderData } from "react-router-dom";


const DataUpdate = () => {

    const coffee = useLoaderData();
    const {_id,name,supplier,category,photo,quantity,taste,details} = coffee;

   
const handleUpdateCoffee = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const quantity = form.quantity.value;
    const taste = form.taste.value;
    const details = form.details.value;

    const addUpdateDataValues = {name,supplier,category,photo,quantity,taste,details};
    console.log(addUpdateDataValues) 
    
    fetch(`http://localhost:5000/coffee/${_id}`, {
        method:'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(addUpdateDataValues)
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
      Swal.fire({
            title: 'Success!',
            text: 'coffee updatet successfully complete',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
    })
}


    return (
        <div>
           
           <Link to={'/'} ><h1 className="text-left font-extrabold"> &larr; Back to home</h1></Link>

           <div className="bg-[#F4F3F0] ">
           <h2 className="text-3xl font-bold pt-3">update this Coffe</h2>
            <p className="mx-auto w-[70%] text-sm my-1">amet  dignissimos facilis est eius! Nobis a modi perferendis optio dolorum voluptates quod cum perspiciatis nam quasi unde quos fugit sint labore beatae, hic cumque, accusantium harum molestias. Aliquam perferendis impedit neque!</p>
           
           
           <form  onSubmit={handleUpdateCoffee} className=" mt-10 " >
             <div className="flex justify-center">

              <div className="block text-left space-y-5  font-semibold">
                <div>
                <label htmlFor="">Name</label><br />       <input defaultValue={name} placeholder='Enter a coffe name' type="text" name="name" className=" my-2 w-[420px] h-9 p-2"  />
                </div>
                <div>
                 <label htmlFor="">Supplier</label> <br /> <input defaultValue={supplier} placeholder='Enter a coffe Supplier' type="text" name="supplier" className=" my-2 w-[420px] h-9 p-2" />
                </div>
                 <div>
                  <label htmlFor="">Category</label><br /> <input defaultValue={category} placeholder='Enter a coffe Category' type="text" name="category" className= "my-2 w-[420px] h-9 p-2" />
                </div>
                 <div>  
                    <label htmlFor="">Photo</label><br /> <input defaultValue={photo} placeholder='Enter a coffe PhotoURL' type="text" name="photo" className=" my-2 w-[420px] h-9 p-2" />
                </div>
              </div>
 
              <div className="ml-20 text-left space-y-5 font-semibold">
                <div>
                 <label htmlFor="">Available quantity</label> <br /> <input defaultValue={quantity} placeholder='Enter a coffe available quantity' type="text" name="quantity" className=" my-2 w-[420px] h-9 p-2" />
                </div>
                 <div>
                  <label htmlFor="">Taste</label><br /> <input defaultValue={taste} placeholder='Enter a coffe taste' type="text" name="taste" className="bmy-2 w-[420px] h-9 p-2" />
                </div>
                 <div>  
                    <label htmlFor="">Details</label><br /> <input defaultValue={details} placeholder='Enter a coffe details' type="text" name="details" className=" my-2 w-[420px] h-9 p-2" />
                </div>
               </div>

             </div>

                <div><input type="submit" value='update submit' className=" w-[75%] h-9  mt-5 mb-8 text-lg font-mono font-bold  bg-[#D2B48C] border-black border rounded hover:bg-red-400 transition-all" /></div>
            </form>        
           </div>
        </div>
    );
};

export default DataUpdate;
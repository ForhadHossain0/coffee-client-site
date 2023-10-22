import { useLoaderData } from "react-router-dom";
import CoffeeCart from "./CoffeeCart";
import { useState } from "react";


const Home = () => {

    const coffeeData = useLoaderData();
    const [remainCoffee,setRemainCoffee] = useState(coffeeData);


    return (
        <div>
            <h2 className="text-4xl font-semibold">total coffee data length : <span className="text-red-400"> {remainCoffee.length} </span> </h2>
           <div className="grid grid-cols-2 gap-5 mt-10">
           { remainCoffee.map(xcoffee => (
                <CoffeeCart key={xcoffee._id} coffee={xcoffee} remainCoffee={remainCoffee} setRemainCoffee={setRemainCoffee} > </CoffeeCart>
               ))
              }
           </div>
             
        </div>
    );
};

export default Home;
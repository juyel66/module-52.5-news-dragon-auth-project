import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("categories.json")
        .then(res => res.json())
        .then(data =>setCategories(data))
    },[])
    return (
        <div className="space-y-6">
            <h2 className="text-4xl">All Categories: {categories.length} </h2>
            {
                categories.map(category =><Link to={`/category/${category.id}`} className="block ml-4 font-semibold text-xl" key={category.id} >{category.name}</Link>)
            }
            
        </div>

        
    );
};

export default LeftSideNav;


/**
 * some and the the village somme the about your self some one and the about more then 
 * bangladesh some everything and the some about some and the about your self some and 
 */
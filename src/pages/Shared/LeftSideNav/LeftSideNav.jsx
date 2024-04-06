import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/public/categories.json')
            .then((res) => res.json())
            .then((data) => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className="text-xl font-semibold mb-5">All Category</h2>
            <h1 className="text-xl font-semibold bg-base-200 py-5 pl-12 mb-3 rounded-lg">National News</h1>

            {
                categories.map((category) => <Link to={`/category/${category.id}`} className="block py-3 ml-12 text-xl font-semibold text-[#9F9F9F]" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;
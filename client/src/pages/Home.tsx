import React from "react";
import {useFetch} from "../Hooks/useFetch";

const Home = () => {
    const { data } = useFetch('/products?populate=*')
    console.log(data)
    return (
        <h1 className="text-center h2">Home</h1>
    )
}


export default Home;
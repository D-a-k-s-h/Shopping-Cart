import React, { useEffect, useState } from 'react'
import Loading from '../component/Loading';
import Product from '../component/Product';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";

    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);

    async function fetchProductData(){
        setLoading(true);
        try{
            const res = await fetch(API_URL);
            const data = await res.json();

            setPosts(data);
        }
        catch(error){
            alert("API cannot be fetched");
        }
        setLoading(false);  
    }

    useEffect(() => {
        fetchProductData();
    },[]);

  return (
    <div className='max-w-6xl p-2 flex flex-wrap mx-auto h-screen '>
        {
            loading ? <Loading/> : posts.map((post) => (<Product key={post.id} post={post}/>))
        }
    </div>
  )
}

export default Home
import React from 'react'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import Cards from '../components/Cards';
import Aboutus from '../components/Aboutus';
import Testimonials from '../components/Testimonials';
import DeliverReturn from '../components/Deliver&Return';
import Locat from '../components/Locat';
import Footer from '../components/Footer';

const Home = () => {
    const productDetail = [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "4600262732.jpg",
        description: "This is product 1.",
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "4600268569.jpg",
        description: "This is product 2.",
      },
      {
        id: 3,
        name: "Product 3",
        price: 500,
        image: "4600268584.jpg",
        description: "This is product 3.",
      },
    ];
  return (
    <div>
      <Navbar />
      <Welcome />
{/* Product Seciton */}
      <div className='mx-20'>
        <h2 className='text-5xl text-center monster-bold mt-10'>Best Sellers</h2>
        <div className='flex gap-10 mt-20 justify-center'>
            {productDetail.map((pd)=>(
                <Cards key={pd.id} product={pd} />
            ))}
        </div>
      </div>

      {/* About Us */}
      <Aboutus/>

      {/* Testimonials */}
      <Testimonials/>

      <DeliverReturn/>
      <Locat/>
      <Footer/>
    </div>
  );
}

export default Home
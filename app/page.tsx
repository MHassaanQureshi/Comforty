"use client";
import Categorycard from "./components/Categorycard/Categorycard";
import Explore from "./components/Explore/Explore";
import Hero from "./components/Hero-section/Hero";
import NewProduct from "./components/NewProduct/NewProduct";
import NotSaleProduct from "./components/NotSaleProduct/NotSaleProduct";
import Partners from "./components/Partners/Partners";
import SaleProductcard from "./components/SaleProductcard/SaleProductcard";


export default function Home(){
  return(
    <>
    <div className="w-[full] flex items-center justify-center">
      <Hero />
    </div>
    <div className="flex justify-center mt-10">
      <Partners />
    </div>
    <div className="w-full flex flex-col p-2 mt-10">
      <h1 className="text-2xl font-bold p-2">Featured Products</h1>
      <div className=" w-[full] flex flex-col items-center mt-5 gap-4 md:flex-row md:justify-center md:gap-10">
      <NewProduct img="/images/product-1.png" price="20" name="Library Stool Chair" />
      <SaleProductcard img="/images/product-2.png" name="Library Stool Chair" from="30" price="20" id="1"/>
      <NotSaleProduct img="/images/product-3.png" name="Library Stool Chair" price="20" />
      <NotSaleProduct img="/images/product-4.png" name="Library Stool Chair" price="20"/>
    
      </div>
    </div>
    <div className="w-full flex flex-col p-2 mt-10 items-center">
      <h1 className="text-2xl font-bold p-2">Top Categories</h1>
      <div className=" w-[80%] flex flex-col place-items-center mt-5 gap-10 items-center md:flex-row md:justify-center  ">
      <Categorycard name="Wing chair" products={3584} img="/images/cat-1.png"/>
      <Categorycard name="Wooden chair chair" products={24} img="/images/cat-2.png"/>
      <Categorycard name="Desk chair" products={154} img="/images/cat-3.png"/>
    
      </div>
    </div>
    <div className="w-[full] mt-10 p-2 flex items-center justify-center">
      <Explore />
    </div>
    <div className="w-full items-center flex flex-col p-2 mt-10">
      <h1 className="text-2xl font-bold p-2">Our Products</h1>
      <div className=" w-[80%] grid grid-cols-2  mt-5 gap-10 items-center justify-center md:flex-row md:justify-center md:grid-cols-3 lg:grid-cols-4 md:gap-10">
      <NewProduct img="/images/product-1.png" price="20" name="Library Stool Chair" />
                <SaleProductcard img="/images/product-2.png" name="Library Stool Chair" from="30" price="20" id="1" />
                <NotSaleProduct img="/images/product-3.png" name="Library Stool Chair" price="20" />
                <NotSaleProduct img="/images/product-4.png" name="Library Stool Chair" price="20" />
                <NewProduct img="/images/product-1.png" price="20" name="Library Stool Chair" />
                <SaleProductcard img="/images/product-2.png" name="Library Stool Chair" from="30" price="20" id="2" />
                <NotSaleProduct img="/images/product-3.png" name="Library Stool Chair" price="20" />
                <NotSaleProduct img="/images/product-4.png" name="Library Stool Chair" price="20"/>
               
    
      </div>
    </div>
    </>
  )
}

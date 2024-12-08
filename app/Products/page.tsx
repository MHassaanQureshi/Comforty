"use client";
import NewProduct from "../components/NewProduct/NewProduct";
import Newsletter from "../components/Newsletter/Newsletter";
import NotSaleProduct from "../components/NotSaleProduct/NotSaleProduct";
import SaleProductcard from "../components/SaleProductcard/SaleProductcard";

export default function Products() {
    return (
        <div className="w-full items-center flex flex-col p-2 mt-10">
            <h1 className="text-2xl font-bold p-2">Our Products</h1>
            <div className="w-[80%] grid grid-cols-2 mt-5 gap-10 items-center justify-center md:flex-row md:justify-center md:grid-cols-3 lg:grid-cols-4 md:gap-10">
                <NewProduct img="/images/product-1.png" price="20" name="Library Stool Chair" />
                <SaleProductcard img="/images/product-2.png" name="Library Stool Chair" from="30" price="20" id="1" />
                <NotSaleProduct img="/images/product-3.png" name="Library Stool Chair" price="20" />
                <NotSaleProduct img="/images/product-4.png" name="Library Stool Chair" price="20" />
                <NewProduct img="/images/product-1.png" price="20" name="Library Stool Chair" />
                <SaleProductcard img="/images/product-2.png" name="Library Stool Chair" from="30" price="20" id="2" />
                <NotSaleProduct img="/images/product-3.png" name="Library Stool Chair" price="20" />
                <NotSaleProduct img="/images/product-4.png" name="Library Stool Chair" price="20"/>
                <NewProduct img="/images/product-1.png" price="20" name="Library Stool Chair" />
                <SaleProductcard img="/images/product-2.png" name="Library Stool Chair" from="30" price="20" id="3" />
                <NotSaleProduct img="/images/product-3.png" name="Library Stool Chair" price="20" />
                <NotSaleProduct img="/images/product-4.png" name="Library Stool Chair" price="20" />
            </div>
            <div className="w-full flex items-baseline bg-[#1E2832] bg-opacity-10">
                <Newsletter />
            </div>
        </div>
    );
}

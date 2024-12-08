// // app/item/[id].tsx or pages/item/[id].tsx
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// const ProductDetail = () => {
//     const router = useRouter();
//     const { id } = router.query;
//     const [product, setProduct] = useState<any>(null);

//     useEffect(() => {
//         if (id) {
//             // Fetch product details based on the ID (example API call)
//             fetch(`/api/item/${id}`) // Change the API path to `/api/item/${id}`
//                 .then((response) => response.json())
//                 .then((data) => setProduct(data))
//                 .catch((error) => console.error("Error fetching product data", error));
//         }
//     }, [id]);

//     if (!product) return <div>Loading...</div>;

//     return (
//         <div>
//             <h1>Product Details: {product.name}</h1>
//             <p>Price: ${product.price}</p>
//             <p>Description: {product.description}</p>
//             <Image src={product.image} alt={product.name} width={300} height={300} />
//         </div>
//     );
// };

// export default ProductDetail;

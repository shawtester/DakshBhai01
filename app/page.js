
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Collections from "./components/Collections";
import { getCollections } from "@/lib/firestore/collections/read_server";
import Categories from "./components/Categories";
import { getCategories } from "@/lib/firestore/categories/read_server";
import ProductsGridView from "./components/Products";
import { getProducts } from "@/lib/firestore/products/read_server";
import { getBrands } from "@/lib/firestore/brands/read_server";
import Brands from "./components/Brands";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import Display from "./components/Display";

export default async function Home() {
  const [collections,categories,products,brands] =
  await Promise.all([
    
    
    getCollections(),
    getCategories(),
    getProducts(),
    getBrands(),
    
  
  
    
  ]);
  
  return (
   <main>
    <Header/>
    <Carousel />
    <Collections collections={collections}/>
    <Categories categories={categories}/>
    <ProductsGridView products={products}/>
    <Display/>
    <CustomerReviews/>
    <Brands brands={brands} />
    <Footer/>
   </main>
  );
}

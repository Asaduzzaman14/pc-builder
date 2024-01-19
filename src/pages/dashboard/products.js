import DashboardLayout from "@/components/Layoutes/DashboardLayout";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [items, setItems] = useState();

  console.log(items);

  const fetchItems = async () => {
    try {
      const response = await fetch(
        `https://pc-builder-gules-psi.vercel.app/api/v1/pc-parts`
      );
      const data = await response.json();
      setItems(data?.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <div className='bg-white text-black'>
        <h2 className=''>Products {items?.length}</h2>
        <div>
          <div class=' px-1'>
            <h2 class=' font-bold mb-4'>Example Datatable</h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At dolor
            facilis harum quam sed laborum magnam odit nulla libero reiciendis
            nobis ea, ut assumenda debitis laudantium alias. Ullam deserunt
            iusto beatae numquam debitis repudiandae, pariatur perspiciatis quos
            blanditiis culpa consequuntur aliquam eum animi, dolore obcaecati
            sit porro sed et cupiditate. Accusamus debitis enim, distinctio nisi
            blanditiis dolorem magnam dolorum ut. Neque esse, voluptates
            deserunt impedit quas repudiandae facere voluptatibus ab tenetur
            natus cupiditate nemo saepe. Vero veritatis eaque amet laboriosam
            eligendi voluptates vitae, rem quibusdam fuga atque obcaecati illum
            quas nisi cumque! Laboriosam sequi fuga et alias? Repellendus, a
            necessitatibus.
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

Products.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

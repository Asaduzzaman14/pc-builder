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
    <div className=' w-[200px] '>
      <h2 className=''>Products {items?.length}</h2>
      <div>
        <div class=' px-1'>
          <h2 class=' font-bold mb-4'>Example Datatable</h2>
          <table class='w-20  border-2 overflow-scroll text-sm'>
            <thead>
              <tr className='text-sky-500'>
                <th class='px-4 py-2'>Name</th>
                <th class='px-4 py-2'>Position</th>
                <th class='px-4 py-2'>Office</th>
                <th class='px-4 py-2'>Age</th>
                <th class='px-4 py-2'>Start date</th>
                <th class='px-4 py-2'>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border px-4 py-2'>Airi Satou</td>
                <td class='border px-4 py-2'>Accountant</td>
                <td class='border px-4 py-2'>Tokyo</td>
                <td class='border px-4 py-2'>33</td>
                <td class='border px-4 py-2'>2008/11/28</td>
                <td class='border px-4 py-2'>$162,700</td>
              </tr>
              <tr>
                <td class='border px-4 py-2'>Brielle Williamson</td>
                <td class='border px-4 py-2'>Integration Specialist</td>
                <td class='border px-4 py-2'>New York</td>
                <td class='border px-4 py-2'>61</td>
                <td class='border px-4 py-2'>2012/12/02</td>
                <td class='border px-4 py-2'>$372,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;

Products.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

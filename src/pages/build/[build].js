import RootLayout from "@/components/Layoutes/RootLayout";
import CatagoryProduct from "@/components/Ui/catagoryProduct";
import { useRouter } from "next/router";

const Build = ({ products }) => {
  const router = useRouter();
  const { query } = router?.query;
  // let values = query.split("-").join(" ");
  console.log(query);
  // const parts = products?.filter((product) => {
  //   return product?.Category === (query == "Cpu-Cooler" ? "Cpu Cooler" : query);
  //   // return product?.Category === (query == "Cpu-Cooler" ? "Cpu Cooler" : query);
  // });

  const parts = products?.filter((product) => {
    return (
      product?.Category === (query === "Cpu-Cooler" ? "Cpu Cooler" : query)
    );
  });

  console.log(parts);

  return (
    <div>
      <h2 className='my-2'>{query}</h2>
      <div className='grid lg:grid-cols-2 gap-2'>
        {parts?.map((part) => {
          return <CatagoryProduct key={part?._id} product={part} />;
        })}
      </div>
    </div>
  );
};

export default Build;

Build.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const result = await fetch(
    "https://pc-builder-gules-psi.vercel.app/api/v1/pc-parts"
  );
  const data = await result?.json();
  return {
    props: {
      products: data?.data,
    },
  };
};

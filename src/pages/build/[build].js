import RootLayout from "@/components/Layoutes/RootLayout";
import CatagoryProduct from "@/components/Ui/catagoryProduct";
import { useRouter } from "next/router";

const Build = ({ products }) => {
  const router = useRouter();
  const { query } = router?.query;
  // let values = query.split("-").join(" ");

  const parts = products?.filter(
    (product) =>
      product?.Category === (query == "Cpu-Cooler" ? "Cpu Cooler" : query)
  );
  // console.log(parts);

  return (
    <div>
      <h2>{query}</h2>
      <h2>Thsi is new page</h2>
      <CatagoryProduct products={parts} />
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
  // console.log(data);
  return {
    props: {
      products: data?.data,
    },
  };
};

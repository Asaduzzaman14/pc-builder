import RootLayout from "@/components/Layoutes/RootLayout";
import CatagoryProduct from "@/components/Ui/catagoryProduct";
import { useRouter } from "next/router";

const FeaturedCatagory = ({ products }) => {
  console.log(products);
  const router = useRouter();

  const parts = products?.filter((product) => {
    return (
      product?.Category === (query === "Cpu-Cooler" ? "Cpu Cooler" : query)
    );
  });
  return (
    <div>
      <h2>{router?.query?.featured}llll</h2>
      {parts?.map((part) => {
        return <CatagoryProduct key={part?._id} product={part} />;
      })}{" "}
    </div>
  );
};

export default FeaturedCatagory;

FeaturedCatagory.getLayout = function getLayout(page) {
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

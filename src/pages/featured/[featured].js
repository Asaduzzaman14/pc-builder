import RootLayout from "@/components/Layoutes/RootLayout";
import CatagoryProduct from "@/components/Ui/catagoryProduct";
import { useRouter } from "next/router";

const FeaturedCatagory = ({ products }) => {
  console.log(products);
  const router = useRouter();
  return (
    <div>
      <h2>{router?.query?.featured}</h2>
      <CatagoryProduct products={products} />
    </div>
  );
};

export default FeaturedCatagory;

FeaturedCatagory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

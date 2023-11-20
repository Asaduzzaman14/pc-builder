import RootLayout from "@/components/Layoutes/RootLayout";
import CatagoryProduct from "@/components/Ui/catagoryProduct";

const Keyboard = ({ products }) => {
  return (
    <div>
      <h2 className='py-2'>Keyboard</h2>
      <div className='grid lg:grid-cols-2 gap-2'>
        {products?.map((part) => {
          return <CatagoryProduct key={part?._id} product={part} />;
        })}
      </div>
    </div>
  );
};

export default Keyboard;

Keyboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const result = await fetch(
    "https://pc-builder-gules-psi.vercel.app/api/v1/pc-parts?Category=Keyboard"
  );
  const data = await result.json();
  console.log(data);
  return {
    props: { products: data?.data },
  };
};

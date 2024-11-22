import { fetchFeaturedProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";
import { Suspense } from "react";
import LoadingContainer from "../global/LoadingContainer";

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;
  return (
    <section className="pt-24">
      <SectionTitle text="أحدث المنتجات" />
      <Suspense fallback={<LoadingContainer />}>
        <ProductsGrid products={products} />
      </Suspense>
    </section>
  );
}
export default FeaturedProducts;

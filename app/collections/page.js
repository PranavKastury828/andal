import CollectionsWrapper from "./CollectionsWrapper";
import { fetchProducts } from "@/lib/sanity";

export default async function CollectionsPage() {
  const products = await fetchProducts();

  return <CollectionsWrapper products={products} />;
}

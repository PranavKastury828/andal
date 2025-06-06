// andal/lib/sanity.js
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "d5qr7y5o",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

export const fetchProducts = async () => {
  return sanityClient.fetch(`*[_type == "product"] | order(price desc){
      _id,
      productName,
      slug,
      productCode,
      price,
      description,
      collectionName,
      "imageUrl": productImage.asset->url
    }`);
};

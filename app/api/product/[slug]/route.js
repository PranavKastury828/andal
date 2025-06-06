import { sanityClient } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const slug = req.url.split("/").pop();

    const productQuery = `*[_type == "product" && slug.current == $slug][0]`;
    const product = await sanityClient.fetch(productQuery, { slug });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const collection = product.collectionName;

    const relatedQuery = `*[_type == "product" && collectionName == $collection && slug.current != $slug][0...3]{
      _id,
      productName,
      slug,
      price,
      collectionName,
      "imageUrl": productImage.asset->url
    }`;

    const relatedProducts = await sanityClient.fetch(relatedQuery, {
      collection,
      slug,
    });

    const stoneOptionsRes = await sanityClient.fetch(
      `*[_type == "stoneOptions"][0].options`
    );
    const sizeOptionsRes = await sanityClient.fetch(
      `*[_type == "sizeOptions"][0].options`
    );

    return NextResponse.json({
      ...product,
      stoneOptions: stoneOptionsRes || [],
      sizeOptions: sizeOptionsRes || [],
      relatedProducts: relatedProducts || [],
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}

import Link from "next/link";

export const metadata = {
    title: "Products Page",
    description: "This is the products page"

}

type Props = {
    params: Promise<{productid: string}>;
}


export default function products({params}: Props){

    const productId = 100;
    return(
        <div>
        <h1 className="text-3xl font-bold underline">Products Page</h1>
        <Link href = {`/products/${productId}`}>Product {productId}</Link>
</div>
    );
}
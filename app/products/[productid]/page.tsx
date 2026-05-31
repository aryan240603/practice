type Props = {
    params: Promise<{productId: string}>;
}
export default async function ProductId({params, } : Props)
{
    const productId = (await params).productId;
    return(
        <div>
        <h1 className="text-3xl font-bold underline">Product Id Page {productId} </h1>
        </div>
    );
}
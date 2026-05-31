import {notFound} from "next/navigation";
import Link from "next/link";

export default async function DynamicReviewsId( {params }: {params: Promise<{productid: string; reviewsId: string;}>})
{


    const {productid, reviewsId} = await params;
    const reviewsid = 100;
    return(
        <div>
        <h1>Reviews of Product {productid} is {reviewsId}</h1>
        <h1><Link href = {`/product/${productid}/reviews/${reviewsid}`}>goto page of reviews id</Link></h1>
        </div>
    );

}
export default async function NewsArticle(
    {params, searchParams}: 
    {params: Promise<{articleid: string}>, searchParams: {category: string}})
{
    const {articleid} = await params;
    const{category} = await searchParams;

    return(
        <>
        <h1 className="text-3xl font-bold underline">News Article Page</h1>
        <p>Article ID: {articleid}</p>
        <p>Category: {category}</p>
        </>
    );
}
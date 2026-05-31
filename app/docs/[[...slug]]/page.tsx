export default async function Docs( {params}: {params: Promise<{slug: string[]}>})
{
    const slug = await params;
    if(slug.slug?.length === 2)
    {
        return(
        <div>
        <h1 className="text-3xl font-bold underline">This is slug page of {slug.slug[0]} and {slug.slug[1]}</h1>
        </div>
        );
    }
    else if(slug.slug?.length === 1)
    {    return(
        <div>
        <h1 className="text-3xl font-bold underline">This is slug page</h1>
        </div>

    );}
    return(
        <h1>This is docs slug</h1>
    );
}
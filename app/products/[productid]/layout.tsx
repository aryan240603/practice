const metadata = 
{
    name: "Product Details Layout",
    description: "This is the layout for the product details page"
    
}
export default function ProductDetailsLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <h1>Product Details Layout</h1>
            {children}
        </div>
    )
}
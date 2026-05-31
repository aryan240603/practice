"use client";
export default function GlobalError(){
    return(
        <div className="p-4 bg-red-100 text-red-700 rounded">
            <h1 className="text-2xl font-bold mb-2">A global error occurred!</h1>
            <p>Sorry, something went wrong while loading the page. Please try again later.</p>
            <button onClick = {() => location.reload()
            }
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Refresh Page
            </button>
        </div>
    );
}
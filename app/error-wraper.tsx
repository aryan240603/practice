"use client";

export default function ErrorWrapper(){
    return(
        <div className="p-4 bg-red-100 text-red-700 rounded">
            <h1 className="text-2xl font-bold mb-2">An error occurred!</h1>
            <p>Sorry, something went wrong while loading the page. Please try again later.</p>
        </div>
    );
}
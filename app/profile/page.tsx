
export default function Profile(){
  const names = ["John", "Jane", "Doe"];


    return(
      <>
      <h1>This is Profile Page</h1>  
      <b>
        {
          names.map((indexedName) => 
          (<div key={indexedName}>
            <p>{indexedName}</p>
          </div>)
        )}
      </b>
      </>
    );
}
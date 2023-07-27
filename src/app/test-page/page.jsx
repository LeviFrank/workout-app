export default async function TestPage() {
  //const environmentPrefix = process.env.NEXT_PUBLIC_ENVIRONMENT_PREFIX;

  const result = await fetch ('http://localhost:3000/test-page/test-api');
  // const result = await fetch ('test-api');
  const data = await result.json();
  console.log(data, "hello");

  return (
    <>

      {/* <p>{...data}</p> */}
      {/* TODO: Create a subcomponent and iterate over the "data"
       object and pass it each property */}
      {/* <p>
        <span>{item.key}: </span>  
        <span>{item.value}</span>  
      </p> */}
    </>
  );
}
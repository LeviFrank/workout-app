import WorkoutContent from "../workout-content";
import Set from "@/components/set";

export default async function Workout({ params }) {


  // const result =  await fetch(`http://localhost:3000/workout/api`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     id: params.id
  //   })
  // });

  const result = await fetch(`http://localhost:3000/workout/${params.id}/api`);
  const data = await result.json();
  
  console.log(data);





  // <Data></Data>





  // --- or ---
  //const result =   fetch(`http://localhost:3000/workout/${params.id}/api`);
  
  /*
  //let Content = null;
  return (
    <div>
      id: {params.id}
      <img src="./../../favicon.ico" className="quackTheEgg" />
      {Content}
    </div>
  );
  */
}

import WorkoutContent from "../workout-content";
import Set from "@/app/set";

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
  // --- or ---
  //const result =   fetch(`http://localhost:3000/workout/${params.id}/api`);
  
  /*
  //let Content = null;
  switch (params.id) {
    case "a":
      // Content = (
      //   <WorkoutContent
      //     name="Workout A Name"
      //     description="Workout A Description"
      //     setData={[
      //       {
      //         name: "Squat Name A",
      //         description: "Squat Description A",
      //         weight: 1000,
      //         reps: 100,
      //       },
      //       {
      //         name: "Bench Press ",
      //         description: "Bench Press Description",
      //         weight: 1,
      //         reps: 3,
      //       },
      //     ]}
      //   />
      //);
      break;
    case "b":
      // Content = (
      //   <WorkoutContent
      //     name="Workout B Name"
      //     description="Workout B Description"
      //     setData={[
      //       {
      //         name: "Squat Name B",
      //         description: "Squat Description B",
      //         weight: 1000000000000,
      //         reps: 1000000000,
      //       },
      //       {
      //         name: "Bench Press Name B",
      //         description: "Bench Press Description B",
      //         weight: 0.000000001,
      //         reps: 1,
      //       },
      //     ]}
      //   />
      //);
      break;
    default:
      Content = alert("HMMM⁉️ That page does not exist!");
      break;
  }
  return (
    <div>
      id: {params.id}
      <img src="./../../favicon.ico" className="quackTheEgg" />
      {Content}
    </div>
  );
  */
}

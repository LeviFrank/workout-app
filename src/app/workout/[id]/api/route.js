import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  // console.log(params.id);
  // console.log("Hello Levi");

  const workoutA = {
    workoutDefinition: {
      name: "workout a",
      description: "workout a description",
      sets: [
        {
          name: "Curls",
          description: "Hold a dumbell in hand and curl weight to shoulder.",
          weight: "30 pounders",
          reps: "14"
        },
        {
          name: "Weighted Lunges",
          description: "Normal lunges, except you carry dumbells in your hands.",
          weight: "50 pounders",
          reps: "22"
        }
      ]
    },
    history: [
      {
        date: "2004-09-04",
        description: "Good for legs and arms, but I wish it hit my core and chest more.",
        setsDone: ["Curls"]
      },
      {
        date: "2011-01-19",
        description: "Pretty easy workout, I wish it was harder",
        setsDone: ["Weighted Lunges", "Curls"]
      }
    ]
  };

  
  const workoutB = {
    workoutDefinition: {
      name: "Workout B",
      description: "Workout B does not have many reps per exercise, workout B focuses on heavy reps.",
      sets: [
        {
          name: "Bench press",
          description: "put a bar with weight above your chest while you are on your back and lift the weight up",
          weight: "225",
          reps: "2"
        },
        {
          name: "Weighted pushups",
          description: "put a weighted backpack on your back and do pushups",
          weight: "30",
          reps: "22"
        }
      ]
    },
    history: [
      {
        date: "2010-08-07",
        description: "Hardest workout I have ever done!",
        setsDone: ["Weighted Pushups"]
      },
      {
        date: "1938-10-04",
        description: "A nice variety of stuff I have not done in a while",
        setsDone: ["Benchpress", "Weighted Pushups"]
      }
    ]
  }
  
  let workout = null;

  // return NextResponse.json({ id: params.id });
  // TODO: Make a switch statement to assign workout to...?
  switch (params.id) {
    case "a":
      workout = workoutA;
      break;
    case "b":
      workout = workoutB;
      break;
    default:
      console.error("Sorry, that workout does not exist");
      break;
  }
  
  return NextResponse.json(workout);
}

// export async function POST(request) {
//   const data = await request.json();

//   return NextResponse.json({ ...data });
// }


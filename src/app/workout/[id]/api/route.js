import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  // console.log(params.id);

  // console.log("Hello Levi");

  const workoutA = {
    workoutDefinition: {
      name: "foo name",
      description: "foo description",
      sets: [
        {
          name: "zoo name",
          description: "zoo description",
          weight: "zoo weight",
          reps: "zoo reps"
        },
        {
          name: "zoo 2 name",
          description: "zoo 2 description",
          weight: "zoo 2 weight",
          reps: "zoo 2 reps"
        }
      ]
    },
    history: [
      {
        date: "blah name", // Date.now()?
        setsDone: ["benchpress-heavy", "squat-light"]
      },
      {
        date: "blah 2 name",
        setsDone: ["benchpress-very-heavy", "squat-very-light"]
      }
    ]
  };

  // TODO: Make a switch statement to assign workout to...?

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
        date: "2-9-2017",
        description: "Hardest workout I have ever done!"
      },
      {
        date: "3-29-2019",
        description: "A nice variety of stuff I have not done in a while"
      }
    ]
  }


  // return NextResponse.json({ id: params.id });
  return NextResponse.json(workout);
}

// export async function POST(request) {
//   const data = await request.json();

//   return NextResponse.json({ ...data });
// }


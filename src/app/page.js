import IconButton from "@/components/icon-button";

export default function Home({ tigga }) {


const  stopwatch = Math.round(Date.now()/1000);


  // const start = Date.now();
  // console.log('starting timer...');
  // setTimeout(() => {
  //   const millis = Date.now() - start;
  //   console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // }, 2000);

  // setTimeout(3000);

  return (
    <>
      <h1 className="homeTitle"> Levi's Workout App</h1>
      <p className="homeAppDescription">
        This Workout App is specifically designed for (American) Football
        players to train much better! The app has specific drills and exercises
        for every position in the game to get YOU better at the wonderful game
        of Football!
      </p>
      <div className="homeWorkoutButtons">
        <a href="/some random link" className="homeCreateWorkoutLink">
          Create a Workout
        </a>
        <a href="/some random link" className="homeEditWorkoutLink">
          Edit a Workout
        </a>
        <a href="/some random link" className="homeStartWorkoutLink">
          Start a Workout
        </a>
        <a href="/some random link" className="homeCreateDrillLink">
          Create a Drill
        </a>
        <a href="/some random link" className="homeEditDrillLink">
          Edit a Drill
        </a>
        <a href="/some random link" className="homeStartDrillLink">
          Start a Drill
        </a>
        <a href="/some random link" className="homeScheduleLink">
          Schedule
        </a>
        <a href="/some random link" className="homeScheduleLink">
          Schedule
        </a>
      </div>
    </>
  );
}

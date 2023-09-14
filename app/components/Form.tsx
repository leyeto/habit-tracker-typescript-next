import { useState } from "react";

type Props = {};

const Form = (props: Props) => {
  const [habit1, setHabit1] = useState<Habit>({
    name: "",
    max_streak: 0,
    current_count: 0,
    start_date: null,
  });

  return (
    <div>
      <form>
        Enter 5 habits you'll like to build, starting from most to least
        <input name="habit-1" type="text" id="habit-1" />
        <input name="habit-2" type="text" id="habit-2" />
        <input name="habit-3" type="text" id="habit-3" />
        <input name="habit-4" type="text" id="habit-4" />
        <input name="habit-5" type="text" id="habit-5" />
      </form>
    </div>
  );
};

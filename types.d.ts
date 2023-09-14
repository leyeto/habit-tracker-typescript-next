type Habit = {
  name: string;
  max_streak: number;
  current_count: number;
  start_date: Date | null;
};

class HabitClass {
  private readonly name: string;
  private max_streak: number;
  private current_count: number;
  private start_date: Date | null;

  constructor(name: string) {
    this.name = name;
    this.max_streak = 0;
    this.current_count = 0;
    this.start_date = Date.now();
  }

  incrementCount() {
    this.current_count++;
    if (this.current_count > this.max_streak) {
      this.max_streak = this.current_count;
    }
  }

  resetCount() {
    this.current_count = 0;
  }

  setName(name: string) {
    this.name = name;
  }

  resetMaxStreak() {
    this.max_streak = 0;
  }

  getHabitName() {
    return this.name;
  }

  getHabitMaxStreak() {
    return this.max_streak;
  }

  getHabitCurrentCount() {
    return this.current_count;
  }

  getHabitStartDate() {
    return this.start_date;
  }
}

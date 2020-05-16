import { WeekDay } from '../../models/WeeklySchedule';

function getDayShortName(day: WeekDay | string): string {
  return day.slice(0, 3);
}

export default getDayShortName;

import i18n from 'i18n-js';

import { WeeklySchedule, WeekDay } from '../../models/WeeklySchedule';
import getDayShortName from './getDayShortName';

function getSelectedDays(days: WeeklySchedule): string {
  const i18nDay = (day: string): string => i18n.t(`days.${day}`);
  const daysMapping = new Map(Object.entries(days)) as Map<WeekDay, boolean>;
  const selectedDays = [];

  daysMapping.forEach((selection, day) => selection && selectedDays.push(day));

  // returns the full day name if only one selected
  if (selectedDays.length === 1) return i18nDay(selectedDays[0]);

  // returns everyday if all seven days are selected
  if (selectedDays.length === 7) return i18nDay('everyday');

  // returns weekdays if all five week days are selected
  if (
    selectedDays.length === 5 &&
    !selectedDays.includes('saturday') &&
    !selectedDays.includes('sunday')
  ) {
    return i18nDay('weekdays');
  }

  // returns weekend if all two weekend days are selected
  if (
    selectedDays.length === 2 &&
    selectedDays.includes('saturday') &&
    selectedDays.includes('sunday')
  ) {
    return i18nDay('weekend');
  }

  // returns the list of days, shortened
  const daysList = selectedDays.map(day => i18nDay(getDayShortName(day)));

  return daysList.join(', ');
}

export default getSelectedDays;

import React from 'react';
import { TouchableOpacity } from 'react-native';

import { WeekDay, WeeklySchedule } from '../../models/WeeklySchedule';
import FormLabel from '../FormLabel';
import Space from '../Space';
import DayIndicator from './components/DayIndicator';
import DaysList from './components/DaysList';

const WeeklyScheduleSelector: React.FC<WeeklyScheduleSelectorProps> = ({
  onChange = () => {},
  weeklySchedule,
}) => {
  const orderedWeeklyScheduled: WeekDay[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  return (
    <>
      <Space>
        <FormLabel>Days of the week:</FormLabel>
      </Space>
      <DaysList>
        {orderedWeeklyScheduled.map(day => (
          <TouchableOpacity
            key={day}
            onPress={() => {
              const updatedWeeklySchedule = weeklySchedule;
              updatedWeeklySchedule[day] = !weeklySchedule[day];

              onChange(updatedWeeklySchedule);
            }}
          >
            <DayIndicator active={weeklySchedule[day]}>
              {`${day[0].toUpperCase()}${day[1]}`}
            </DayIndicator>
          </TouchableOpacity>
        ))}
      </DaysList>
    </>
  );
};

interface WeeklyScheduleSelectorProps {
  weeklySchedule: WeeklySchedule;
  onChange?(updatedSchedule: WeeklySchedule): void;
}

export default WeeklyScheduleSelector;

import React from 'react';
import { TouchableOpacity } from 'react-native';

import { WeeklySchedule } from '../../models/WeeklySchedule';
import FormLabel from '../FormLabel';
import Space from '../Space';
import DayIndicator from './components/DayIndicator';
import DaysList from './components/DaysList';

const WeeklyScheduleSelector: React.FC<WeeklyScheduleSelectorProps> = ({
  onChange = () => {},
  weeklySchedule,
}) => (
  <>
    <Space>
      <FormLabel>Days of the week:</FormLabel>
    </Space>
    <DaysList>
      {Array.from(weeklySchedule).map(([day, value]) => (
        <TouchableOpacity
          key={day}
          onPress={() => onChange(weeklySchedule.set(day, !value))}
        >
          <DayIndicator active={value}>
            {`${day[0].toUpperCase()}${day[1]}`}
          </DayIndicator>
        </TouchableOpacity>
      ))}
    </DaysList>
  </>
);

interface WeeklyScheduleSelectorProps {
  weeklySchedule: WeeklySchedule;
  onChange?(updatedSchedule: WeeklySchedule): void;
}

export default WeeklyScheduleSelector;

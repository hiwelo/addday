import { useRoute, RouteProp } from '@react-navigation/native';
import React from 'react';

import ViewLayout from '../../../components/ViewLayout';
import WeeklyScheduleSelector from '../../../components/WeeklyScheduleSelector/WeeklyScheduleSelector';
import { NavigationParamsList } from '../../../models/NavigationParamsList';
import { ScheduledIntake } from '../../../models/ScheduledIntake';
import { useScheduledIntake } from '../../../modules/meds';
import { createUuid } from '../../../modules/random';
import { useI18n } from '../../../services/LocalizationProvider';

const SetScheduledIntakeScreen: React.FC = () => {
  const { __ } = useI18n();
  const { params } = useRoute<
    RouteProp<NavigationParamsList, 'SetScheduledIntakeScreen'>
  >();
  const [scheduledIntake, setScheduledIntake] = React.useState(
    useScheduledIntake(params ? params.id : undefined),
  );

  const updateWeeklySchedule = (
    weeklySchedule: ScheduledIntake['days'],
  ): void => {
    setScheduledIntake({
      ...scheduledIntake,
      days: weeklySchedule,
    });
  };

  /**
   * Effect aiming to generate a unique ID for the new ScheduledIntake if needed
   */
  React.useEffect(() => {
    if (scheduledIntake.id) return;

    (async () => {
      setScheduledIntake({
        ...scheduledIntake,
        id: await createUuid(),
      });
    })();
  });

  if (!scheduledIntake.id) return null;

  return (
    <ViewLayout
      hasBackButton
      headerTitle={__('meds.scheduledIntake.title')}
      scrollable
    >
      <WeeklyScheduleSelector
        weeklySchedule={scheduledIntake.days}
        onChange={updateWeeklySchedule}
      />
    </ViewLayout>
  );
};

interface SetScheduledIntakeScreenProps {
  /** ID of the ScheduledIntake to edit, if existing */
  id: ScheduledIntake['id'] | undefined;
}

export default SetScheduledIntakeScreen;

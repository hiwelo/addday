import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { Button, Text } from '@ui-kitten/components';
import moment from 'moment';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';

import FormLabel from '../../../components/FormLabel';
import Space from '../../../components/Space';
import ViewLayout from '../../../components/ViewLayout';
import WeeklyScheduleSelector from '../../../components/WeeklyScheduleSelector/WeeklyScheduleSelector';
import { setScheduledIntake as setScheduledIntakeAction } from '../../../data/Meds/actions';
import { NavigationParamsList } from '../../../models/NavigationParamsList';
import { ScheduledIntake } from '../../../models/ScheduledIntake';
import { useScheduledIntake } from '../../../modules/meds';
import { createUuid } from '../../../modules/random';
import { useI18n } from '../../../services/LocalizationProvider';

const SetScheduledIntakeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { __ } = useI18n();
  const { navigate } = useNavigation();
  const { params } = useRoute<
    RouteProp<NavigationParamsList, 'SetScheduledIntakeScreen'>
  >();
  const [scheduledIntake, setScheduledIntake] = React.useState(
    useScheduledIntake(params ? params.id : undefined),
  );
  const [datePickerVisibility, setDatePickerVisibility] = React.useState(false);

  const submitScheduledIntake = () => {
    dispatch(setScheduledIntakeAction(scheduledIntake));
    navigate('MedsScreens');
  };

  const updateMoment = (event: Event, selectedDate: Date): void => {
    setScheduledIntake({
      ...scheduledIntake,
      moment: moment(selectedDate),
    });
  };

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
      <Space type="comfortable">
        <Space>
          <FormLabel>Moment of the day:</FormLabel>
        </Space>
        <TouchableWithoutFeedback
          onPress={() => setDatePickerVisibility(!datePickerVisibility)}
        >
          <Text category="p1">{scheduledIntake.moment.format('HH:mm')}</Text>
        </TouchableWithoutFeedback>
        {datePickerVisibility && (
          <DateTimePicker
            value={scheduledIntake.moment.toDate()}
            mode="time"
            onChange={updateMoment}
          />
        )}
      </Space>
      <Space type="comfortable">
        <Button onPress={submitScheduledIntake}>{__('meds.submit')}</Button>
      </Space>
    </ViewLayout>
  );
};

interface SetScheduledIntakeScreenProps {
  /** ID of the ScheduledIntake to edit, if existing */
  id: ScheduledIntake['id'] | undefined;
}

export default SetScheduledIntakeScreen;

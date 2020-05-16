import { useNavigation } from '@react-navigation/native';
import { Button, List, ListItem } from '@ui-kitten/components';
import momentjs from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';

import ViewLayout from '../../../components/ViewLayout';
import { getIntakes } from '../../../data/Intakes/selectors';
import { Intake } from '../../../models/Intake';
import { getSelectedDays } from '../../../modules/days';
import { useI18n } from '../../../services/LocalizationProvider';

const MedsScreen: React.FC = () => {
  const { __ } = useI18n();
  const intakes = useSelector(getIntakes);
  const { navigate } = useNavigation();

  /** Item to render for each medication to display */
  const intakeItem = ({
    item: [id, { days, moment }],
  }: {
    item: [Intake['id'], Intake];
  }) => {
    return (
      <ListItem
        description="test"
        key={id}
        title={`${momentjs(moment).format('HH:mm')} • ${getSelectedDays(days)}`}
        accessory={style => (
          <Button
            {...style}
            status="basic"
            onPress={() => navigate('MedicationDetailsScreen', { id })}
          >
            Edit
          </Button>
        )}
      />
    );
  };

  return (
    <ViewLayout
      headerTitle={__('meds.title')}
      sideActionIcon="plus"
      sideAction={() => navigate('NewMedicationScreen')}
    >
      <List
        data={Array.from(intakes)}
        renderItem={intakeItem}
        style={{ flex: 1 }}
      />
      <Button
        status="basic"
        onPress={() => navigate('SetScheduledIntakeScreen')}
      >
        Create new intake
      </Button>
    </ViewLayout>
  );
};

export default MedsScreen;

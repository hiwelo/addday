import { useNavigation } from '@react-navigation/native';
import { Button, List, ListItem } from '@ui-kitten/components';
import React from 'react';

import ViewLayout from '../../../components/ViewLayout';
import { Medication } from '../../../models/Medication';
import useMeds from '../../../modules/meds/hooks';
import { useI18n } from '../../../services/LocalizationProvider';

const MedsScreen: React.FC = () => {
  const { __ } = useI18n();
  const { medications } = useMeds();
  const { navigate } = useNavigation();

  /** Item to render for each medication to display */
  const medicationItem = ({
    item: { alias, dosage, id, name },
    index,
  }: {
    item: Medication;
    index: number;
  }) => {
    const details = [alias, dosage].filter(Boolean);

    return (
      <ListItem
        description={details.join(' • ')}
        key={index}
        title={name}
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
        data={Object.values(medications)}
        renderItem={medicationItem}
        style={{ flex: 1 }}
      />
      <Button
        status="basic"
        onPress={() => navigate('SetScheduledIntakeScreen')}
      >
        Create new schedule
      </Button>
    </ViewLayout>
  );
};

export default MedsScreen;

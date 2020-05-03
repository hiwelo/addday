import { useRoute, useNavigation } from '@react-navigation/native';
import { Text } from '@ui-kitten/components';
import React from 'react';
import { useSelector } from 'react-redux';

import Space from '../../../components/Space';
import ViewLayout from '../../../components/ViewLayout';
import { AppState } from '../../../data/types';
import { Medication } from '../../../models/Medication';
import { useI18n } from '../../../services/LocalizationProvider';

const MedicationDetailsScreen: React.FC = () => {
  const { __ } = useI18n();
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { id } = params as Partial<Medication>;
  const medication = useSelector<AppState>(
    state => state.meds.medications[id],
  ) as Medication;
  const { alias, dosage, name } = medication;
  const details = [alias, dosage].filter(Boolean);

  // early-termination if the ID is not provided
  if (!id) navigate('MedsScreen');

  return (
    <ViewLayout
      hasBackButton
      headerTitle={name}
      scrollable
      sideActionIcon="edit"
      sideAction={() => navigate('EditMedicationScreen', { id })}
    >
      <Space>
        <Text category="h6">{__('meds.view.medicationSection')}</Text>
        <Text>{name}</Text>
        {details && <Text category="p2">{details.join(' • ')}</Text>}
      </Space>
      <Space>
        <Text category="h6">{__('meds.view.intakeSection')}</Text>
        <Text>{name}</Text>
      </Space>
    </ViewLayout>
  );
};

export default MedicationDetailsScreen;

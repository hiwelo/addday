import { useNavigation } from '@react-navigation/native';
import { List, ListItem } from '@ui-kitten/components';
import React from 'react';

import ViewLayout from '../../../components/ViewLayout';
import { Medication } from '../../../data/Meds/types';
import useMeds from '../../../modules/meds/hooks';
import { useI18n } from '../../../services/LocalizationProvider';

const MedsScreen: React.FC = () => {
  const { __ } = useI18n();
  const { medications } = useMeds();
  const { navigate } = useNavigation();

  /** Item to render for each medication to display */
  const medicationItem = ({
    item,
    index,
  }: {
    item: Medication;
    index: number;
  }) => <ListItem description={item.id} key={index} title={item.name} />;

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
    </ViewLayout>
  );
};

export default MedsScreen;

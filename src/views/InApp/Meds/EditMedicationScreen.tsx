import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MedicationForm from '../../../components/MedicationForm';
import ViewLayout from '../../../components/ViewLayout';
import { editMedication } from '../../../data/Meds/actions';
import { Medication } from '../../../data/Meds/types';
import { RootState } from '../../../data/types';
import { useI18n } from '../../../services/LocalizationProvider';

const EditMedicationScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { __ } = useI18n();
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { id } = params as EditMedicationScreenProps;
  const medication = useSelector<RootState>(
    state => state.meds.medications[id],
  ) as Medication;
  const { name } = medication;

  const onSubmit = (values: Medication) => {
    if (!id) return;

    dispatch(editMedication(values));
    navigate('MedicationDetailsScreen', { id });
  };

  return (
    <ViewLayout
      hasBackButton
      headerTitle={__('meds.form.editTitle', { name })}
      scrollable
    >
      <MedicationForm data={medication} onSubmit={onSubmit} />
    </ViewLayout>
  );
};

interface EditMedicationScreenProps {
  /** ID of the medication to edit */
  id: string;
}

export default EditMedicationScreen;

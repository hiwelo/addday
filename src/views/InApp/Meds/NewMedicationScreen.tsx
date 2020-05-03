import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDispatch } from 'react-redux';

import MedicationForm from '../../../components/MedicationForm';
import ViewLayout from '../../../components/ViewLayout';
import { editMedication } from '../../../data/Meds/actions';
import { Medication } from '../../../models/Medication';
import { createUuid } from '../../../modules/random';
import { useI18n } from '../../../services/LocalizationProvider';

const NewMedicationScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { __ } = useI18n();
  const { navigate } = useNavigation();
  const [id, setId] = React.useState<string | undefined>(undefined);

  const onSubmit = (values: Medication) => {
    if (!values.name) return;

    dispatch(editMedication(values));
    navigate('MedsScreen');
  };

  /**
   * This effect fires the generation of a new Unique ID for the new medication
   */
  React.useEffect(() => {
    (async function() {
      setId(await createUuid());
    })();
  }, []);

  return (
    <ViewLayout hasBackButton headerTitle={__('meds.form.newTitle')} scrollable>
      {id && <MedicationForm data={{ id, name: '' }} onSubmit={onSubmit} />}
    </ViewLayout>
  );
};

export default NewMedicationScreen;

import { useNavigation } from '@react-navigation/native';
import { Input, Button } from '@ui-kitten/components';
import React from 'react';
import { useDispatch } from 'react-redux';

import Space from '../../../components/Space';
import ViewLayout from '../../../components/ViewLayout';
import { addMedication } from '../../../data/Meds/actions';
import { createUuid } from '../../../modules/random';
import { useI18n } from '../../../services/LocalizationProvider';

const NewMedicationScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { __ } = useI18n();
  const { navigate } = useNavigation();
  const [id, setId] = React.useState<string | undefined>(undefined);
  const [name, setName] = React.useState('');

  const onSubmit = () => {
    if (!id) return;

    dispatch(addMedication({ id, name }));
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
    <ViewLayout hasBackButton headerTitle={__('meds.new')} scrollable>
      {id && (
        <>
          <Space />
          <Space>
            <Input
              label={__('meds.medication.name')}
              onChangeText={setName}
              placeholder={__('meds.medication.namePlaceholder')}
              value={name}
            />
          </Space>
          <Space>
            <Button disabled={!name} onPress={onSubmit}>
              {__('meds.add')}
            </Button>
          </Space>
        </>
      )}
    </ViewLayout>
  );
};

export default NewMedicationScreen;

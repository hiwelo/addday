import { Layout, Input, Button } from '@ui-kitten/components';
import { Formik } from 'formik';
import React from 'react';

import { Medication } from '../../models/Medication';
import { useI18n } from '../../services/LocalizationProvider';
import Space from '../Space';

const MedicationForm: React.FC<MedicationFormProps> = ({ data, onSubmit }) => {
  const { __ } = useI18n();

  return (
    <Formik initialValues={data} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <Layout>
          <Space>
            <Input
              label={__('meds.medication.name')}
              onBlur={handleBlur('name')}
              onChangeText={handleChange('name')}
              placeholder={__('meds.medication.namePlaceholder')}
              value={values.name}
            />
          </Space>
          <Space>
            <Input
              label={__('meds.medication.dosage')}
              onBlur={handleBlur('dosage')}
              onChangeText={handleChange('dosage')}
              placeholder={__('meds.medication.dosagePlaceholder')}
              value={values.dosage}
            />
          </Space>
          <Space>
            <Input
              label={__('meds.medication.alias')}
              onBlur={handleBlur('alias')}
              onChangeText={handleChange('alias')}
              placeholder={__('meds.medication.aliasPlaceholder')}
              value={values.alias}
            />
          </Space>
          <Space>
            <Button disabled={!values.name} onPress={handleSubmit as any}>
              {__('meds.submit')}
            </Button>
          </Space>
        </Layout>
      )}
    </Formik>
  );
};

interface MedicationFormProps {
  data?: Medication;
  onSubmit(values: Medication): void;
}

export default MedicationForm;

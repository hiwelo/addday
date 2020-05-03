import { Layout, Text } from '@ui-kitten/components';
import { Formik } from 'formik';
import React from 'react';

import { ScheduledIntake } from '../../models/ScheduledIntake';
import Space from '../Space';

const ScheduledIntakeForm: React.FC<ScheduledIntakeFormProps> = ({
  data,
  onSubmit,
}) => {
  return (
    <Formik initialValues={data} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <Layout>
          <Space>
            <Text>{data.id}</Text>
          </Space>
        </Layout>
      )}
    </Formik>
  );
};

interface ScheduledIntakeFormProps {
  data: ScheduledIntake;
  onSubmit(values: ScheduledIntake): void;
}

export default ScheduledIntakeForm;

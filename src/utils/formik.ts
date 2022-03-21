import { useCallback, useMemo } from 'react';

import { useFormik } from 'formik';
import { get } from 'lodash';

const useGenericFormik = () => useFormik({ initialValues: {} as any, onSubmit() {} });
export type GenericFormikConfig = ReturnType<typeof useGenericFormik>;

export const useFormikArray = (formikProps: GenericFormikConfig, key: string) => {
  const add = useCallback(
    (value: any, index?: number) => {
      const currentValues = get(formikProps.values, key);
      if (index) {
        if (index < currentValues.length) {
          const nextValues = [...currentValues];
          nextValues.splice(index, 0, value);
          formikProps.setFieldValue(`${key}`, nextValues);
        }
      } else {
        formikProps.setFieldValue(`${key}.${currentValues.length}`, value);
      }
    },
    [formikProps, key],
  );

  const remove = useCallback(
    (index: number) => {
      formikProps.setFieldValue(
        `${key}`,
        get(formikProps.values, key).filter((_a: any, i: number) => i !== index),
      );
    },
    [formikProps, key],
  );

  const nameFn = useCallback((index: number, name: string) => `${key}.${index}.${name}`, [key]);

  return useMemo(
    () => ({
      add,
      remove,
      name: nameFn,
    }),
    [add, nameFn, remove],
  );
};

import { Box, Flex, Switch, SwitchProps } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps, FormControl } from '../form-control';

export type SwitchControlProps = BaseProps & { switchProps?: SwitchProps };

export const SwitchControl: FC<SwitchControlProps> = React.forwardRef(
  (props: SwitchControlProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { name, label, switchProps, ...rest } = props;
    const [field, { error, touched }] = useField(name);

    return (
      <Box
        css={css`
          .chakra-form__label {
            margin-bottom: 0;
          }
          .chakra-switch {
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
          }
          .chakra-form__error-message {
            margin-top: 0;
          }
        `}
      >
        <FormControl
          name={name}
          label={label}
          as={Flex}
          alignItems="center"
          {...rest}
        >
          <Switch
            {...field}
            id={name}
            isInvalid={!!error && touched}
            isChecked={field.value}
            ref={ref}
            {...switchProps}
          />
        </FormControl>
      </Box>
    );
  }
);

export default SwitchControl;

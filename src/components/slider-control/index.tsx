import {
  Slider,
  SliderFilledTrack,
  SliderProps,
  SliderThumb,
  SliderThumbProps,
  SliderTrack,
  SliderTrackProps,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps, FormControl } from '../form-control';

export type SliderControlProps = BaseProps & {
  sliderProps?: SliderProps;
  sliderTrackProps?: SliderTrackProps;
  sliderThumbProps?: SliderThumbProps;
};

export const SliderControl: FC<SliderControlProps> = (
  props: SliderControlProps
) => {
  const {
    name,
    label,
    sliderProps,
    sliderTrackProps,
    sliderThumbProps,
    ...rest
  } = props;
  const [field, , { setValue }] = useField(name);
  function handleChange(value: number) {
    setValue(value);
  }
  // Does not behave like expected, so we manually handle it.
  function handleBlur(e: React.FocusEvent<HTMLDivElement>) {
    (e.target as any).name = name;
    field.onBlur(e);
  }

  return (
    <FormControl name={name} label={label} {...rest}>
      <Slider
        {...field}
        id={name}
        onChange={handleChange}
        onBlur={handleBlur}
        {...sliderProps}
      >
        <SliderTrack {...sliderTrackProps}>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb {...sliderThumbProps} />
      </Slider>
    </FormControl>
  );
};

export default SliderControl;

import React from 'react';
import { SwitchContainer, SwitchNo, SwitchYes } from './studentStyle';

const Switch = ({
  yesTitle = 'yes',
  noTitle = 'no',
  setValue,
  value = {},
  valueKey = '',
  width,
  padding,
}) => {
  return (
    <SwitchContainer width={width} padding={padding}>
      <SwitchYes
        onClick={() => setValue({ ...value, [valueKey]: yesTitle })}
        isActive={value[valueKey]?.match(yesTitle)}
      >
        <div className='mt-2 mx-2 questionDot2'></div>
        <span>{yesTitle}</span>
      </SwitchYes>
      <SwitchNo
        onClick={() => setValue({ ...value, [valueKey]: noTitle })}
        isActive={value[valueKey].match(noTitle)}
      >
        <div className='mt-2 mx-2 questionDot2'></div>
        <span>{noTitle}</span>
      </SwitchNo>
    </SwitchContainer>
  );
};

export default Switch;

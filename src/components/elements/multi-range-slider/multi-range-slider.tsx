import React from 'react';
import './multi-range-slider.scss';
import Div from '@elements/div'
import Text from '@elements/text'

const RangeSlider = ({ min, max, value, step, onChange }) => {
  const [minValue, setMinValue] = React.useState(value ? value.min : min);
  const [maxValue, setMaxValue] = React.useState(value ? value.max : max);

  React.useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMinChange = e => {
    e.preventDefault();
    const newMinVal = Math.min(+e.target.value, maxValue - step);
    if (!value) { setMinValue(newMinVal); };
    onChange({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = e => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue + step);
    if (!value) { setMaxValue(newMaxVal); };
    onChange({ min: minValue, max: newMaxVal });
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <Div className={'w-full flex-col'}>
      <div className="wrapper">
        <div className="input-wrapper">
          <input
            className="input"
            type="range"
            value={minValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMinChange}
          />
          <input
            className="input"
            type="range"
            value={maxValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMaxChange}
          />
        </div>

        <div className="control-wrapper">
          <div className="control" style={{ left: `${minPos}%` }} />
          <div className="rail">
            <div
              className="inner-rail"
              style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
            />
          </div>
          <div className="control" style={{ left: `${maxPos}%` }} />
        </div>
      </div>
      <Div className={'items-center gap-1 mt-5'}>
        <Text typography={['xs', 'xs']}>{value ? value.min : min}</Text>
        <Text typography={['xs', 'xs']}>—</Text>
        <Text typography={['xs', 'xs']}>{value ? value.max : max}$</Text>
      </Div>
    </Div>
  );
};

export default RangeSlider;

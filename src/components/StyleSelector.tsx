import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { TemplateStyles } from '../types/template';

const startingIndex = 8;
const NUMBER_RANGE = [...new Array(49)].map(
  (each, index) => index + startingIndex
);

export const StyleSelector = ({
  onSave,
  type,
  templateStyle,
}: {
  onSave: (section: string, template: TemplateStyles) => void;
  type: string;
  templateStyle: TemplateStyles;
}) => {
  const [styles, setStyles] = useState<TemplateStyles>(templateStyle);

  const handleStyleChange = (
    attribute: keyof TemplateStyles,
    value: string
  ) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [attribute]: value,
    }));
  };

  const handleSave = () => {
    onSave(type, styles);
    alert(`Saved styles for the ${type}`);
  };

  const handleReset = () => {
    setStyles(templateStyle);
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row gap-8 mb-8'>
        <div className='flex flex-col gap-4 mr-8'>
          <label>{type} Height:</label>
          <label className='text-gray-500'>
            Adjust the height to make the component bigger
          </label>

          <input
            type='range'
            min='80'
            max='1000'
            value={styles.height.replace('px', '')}
            onChange={(e) => handleStyleChange('height', `${e.target.value}px`)}
          />
        </div>
        <div>
          <label>Background Color:</label>
          <HexColorPicker
            color={styles.backgroundColor}
            onChange={(color) => handleStyleChange('backgroundColor', color)}
          />
        </div>
        <div>
          <label>Font Color:</label>
          <HexColorPicker
            color={styles.fontColor}
            onChange={(color) => handleStyleChange('fontColor', color)}
          />
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4'>
            <label>Font Type:</label>
            <select
              value={styles.fontType}
              className='border border-solid border-slate-950'
              onChange={(e) => handleStyleChange('fontType', e.target.value)}
            >
              <option value='Arial'>Arial</option>
              <option value='Helvetica'>Helvetica</option>
              <option value='Times New Roman'>Times New Roman</option>
            </select>
          </div>
          <div className='flex flex-col gap-4'>
            <label>Font Weight:</label>
            <select
              value={styles.fontWeight}
              className='border border-solid border-slate-950'
              onChange={(e) => handleStyleChange('fontWeight', e.target.value)}
            >
              <option value='normal'>Normal</option>
              <option value='bold'>Bold</option>
              <option value='600'>Semi-Bold</option>
            </select>
          </div>
          <div className='flex flex-col gap-4'>
            <label>Font Size:</label>
            <select
              value={styles.fontSize}
              className='border border-solid border-slate-950'
              onChange={(e) =>
                handleStyleChange('fontSize', `${e.target.value}px`)
              }
            >
              {NUMBER_RANGE.map((key, index) => (
                <option key={index} value={`${key}`}>{`${key}px`}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className='flex justify-between my-8'>
        <button
          className='bg-[#0096FF] hover:bg-blue-800 active:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300 text-xl text-white px-4 py-2 rounded mr-2 disabled:bg-opacity-15'
          onClick={handleSave}
        >
          Save {type}
        </button>

        <button
          onClick={handleReset}
          className='bg-[#f82c15] hover:bg-[#ce1a06] active:bg-[#be1805] shadow-xl p-2 focus:outline-none focus:ring focus:ring-white text-white rounded mr-2 disabled:bg-opacity-15'
        >
          Reset Styles
        </button>
      </div>
    </div>
  );
};

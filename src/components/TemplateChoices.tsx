import * as RadioGroup from '@radix-ui/react-radio-group';
import { TemplateType } from '../types/template';
import { SECTION_CHOICES } from '../templates/TemplateBuilder';

const typesChoices = {
  Name: '{{name}}',
  Skills: '{{skills}}',
  Contact: '{{contact}}',
  Experience: '{{experience}}',
  Education: '{{education}}',
  linkedIn: '{{linkedIn}}',
  References: '{{references}}',
  Certifications: '{{certifications}}',
  Description: '{{description}}',
};

type TypesChoicesKeys = keyof typeof typesChoices;

export const TemplateChoices = ({
  onChange,
  value,
  template,
}: {
  onChange: (template: TemplateType) => void;
  value: string;
  template: TemplateType;
}) => {
  const handleSelection = (area: string, type: TypesChoicesKeys) => {
    const typeValue = typesChoices[type];

    switch (area) {
      case 'Header':
        const isExistsHeader = template.header.content.includes(typeValue);
        if (isExistsHeader) return;
        onChange({
          ...template,
          header: {
            ...template.header,
            content: template.header.content + '<br />' + typeValue,
          },
        });
        break;
      case 'Body':
        const isExistsBody = template.body.content.includes(typeValue);
        if (isExistsBody) return;
        onChange({
          ...template,
          body: {
            ...template.body,
            content: template.body.content + '<br />' + typeValue,
          },
        });

        break;
      case 'Footer':
        const isExistsFooter = template.footer.content.includes(typeValue);
        if (isExistsFooter) return;
        onChange({
          ...template,
          footer: {
            ...template.footer,
            content: template.footer.content + '<br />' + typeValue,
          },
        });

        break;
      case 'Margin':
        const isExistsMargin = template.margin.content.includes(typeValue);
        if (isExistsMargin) return;
        onChange({
          ...template,
          margin: {
            ...template.margin,
            content: template.margin.content + '<br />' + typeValue,
          },
        });
        break;
      default:
        console.log('Unknown section selected');
        break;
    }
  };

  return (
    <div className='flex flex-row my-8'>
      <ul className='flex space-x-4'>
        {Object.keys(typesChoices).map((key, value) => (
          <li key={key} className='inline-block pr-4 border p-4'>
            {key} <Choices onSelect={handleSelection} type={key} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Choices = ({
  onSelect,
  type,
}: {
  onSelect: (area: string, type: TypesChoicesKeys) => void;
  type: string;
}) => {
  return (
    <form>
      <RadioGroup.Root
        className='RadioGroupRoot mt-4'
        aria-label='View density'
      >
        {SECTION_CHOICES.map((item, index) => {
          return (
            <div className='flex items-center' key={`${item}-${index}`}>
              <RadioGroup.Item
                className='RadioGroupItem'
                value={item}
                id={`${index + 1}`}
                onClick={() => onSelect(item, type as TypesChoicesKeys)}
              >
                <RadioGroup.Indicator className='RadioGroupIndicator' />
              </RadioGroup.Item>
              <label className='Label' htmlFor={`${index + 1}`}>
                {item}
              </label>
            </div>
          );
        })}
      </RadioGroup.Root>
    </form>
  );
};

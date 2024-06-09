import { TemplateStyles, TemplateType } from '../types/template';
import { StyleSelector } from './StyleSelector';
import { SECTION_CHOICES } from '../templates/TemplateBuilder';

type SectionChoice = (typeof SECTION_CHOICES)[number];

export const TemplateSection = ({
  onChange,
  type,
  template,
  templateStyle,
}: {
  onChange: (template: TemplateType) => void;
  type: SectionChoice;
  template: TemplateType;
  templateStyle: TemplateStyles;
}) => {
  const handleSelection = (section: string, style: TemplateStyles) => {
    switch (section) {
      case 'Header':
        onChange({
          ...template,
          header: {
            ...template.header,
            styles: style,
          },
        });
        break;
      case 'Body':
        onChange({
          ...template,
          body: {
            ...template.body,
            styles: style,
          },
        });
        break;
      case 'Footer':
        onChange({
          ...template,
          footer: {
            ...template.footer,
            styles: style,
          },
        });
        break;
      case 'Margin':
        onChange({
          ...template,
          margin: {
            ...template.margin,
            styles: style,
          },
        });
        break;
      default:
        console.log('Unknown section selected');
        break;
    }
  };

  return (
    <div>
      <StyleSelector
        onSave={handleSelection}
        type={type}
        templateStyle={templateStyle}
      />
    </div>
  );
};

type TemplateStyles = {
  height: string;
  width: string;
  fontType: string;
  fontSize: string;
  fontWeight: string;
  fontColor: string;
  backgroundColor: string;
};

type TitleStyles = {
  fontType: string;
  fontSize: string;
  fontWeight: string;
  fontColor: string;
};

type FixedSection = {
  title: TitleStyles;
  styles: TemplateStyles;
  content: string;
};

type OptionalSection = {
  title: TitleStyles;
  styles: TemplateStyles;
  content: string;
  enabled: Boolean;
};

type TemplateType = {
  id: number;
  name: string;
  header: FixedSection;
  body: FixedSection;
  footer: FixedSection;
  margin: OptionalSection;
  style: TemplateStyles;
  watermark?: string;
};

// An initial set up of the template:
const style: TemplateStyles = {
  height: '80px',
  width: '',
  fontType: 'Arial',
  fontSize: '16px',
  fontWeight: 'normal',
  fontColor: '#000000',
  backgroundColor: '#ffffff',
};

const titleStyle = {
  fontType: 'Arial',
  fontSize: '16px',
  fontWeight: '',
  fontColor: '',
};

const section: FixedSection = {
  title: titleStyle,
  styles: {
    height: '100px',
    width: '',
    fontType: 'Arial',
    fontSize: '16px',
    fontWeight: 'normal',
    fontColor: '#000000',
    backgroundColor: '#ffffff',
  },
  content: '',
};

const bodySection: FixedSection = {
  title: titleStyle,
  styles: {
    height: '900px',
    width: '',
    fontType: 'Arial',
    fontSize: '16px',
    fontWeight: 'normal',
    fontColor: '#000000',
    backgroundColor: '#ffffff',
  },
  content: '',
};

const optionalSection: OptionalSection = {
  title: titleStyle,
  styles: style,
  content: '',
  enabled: false,
};

const initialTemplate: TemplateType = {
  id: 0,
  name: '',
  header: section,
  body: bodySection,
  footer: section,
  margin: optionalSection,
  style: {
    height: '1122px',
    width: '',
    fontType: 'Arial',
    fontSize: '16px',
    fontWeight: '',
    fontColor: '',
    backgroundColor: '',
  },
  watermark: '',
};

export type { TemplateType, TemplateStyles };

export { initialTemplate };

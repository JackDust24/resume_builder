import React from 'react';
import { TemplateType } from '../types/template';
import 'tailwindcss/tailwind.css';

const ResumePreview = ({ template }: { template: TemplateType }) => {
  return (
    <div className='p-4 border rounded shadow-lg bg-white relative'>
      {template.watermark && (
        <img
          src={template.watermark}
          alt='Watermark'
          className='absolute opacity-10 w-1/2 h-1/2 top-1/4 left-1/4'
        />
      )}
      <div
        className='text-center p-4 border-b'
        style={{
          fontFamily: template.header.styles.fontType,
          fontSize: template.header.styles.fontSize,
          fontWeight: template.header.styles.fontWeight,
          color: template.header.styles.fontColor,
          height: template.header.styles.height,
          backgroundColor: template.header.styles.backgroundColor,
        }}
        dangerouslySetInnerHTML={{ __html: template.header.content }}
      ></div>
      <div
        className='p-4'
        style={{
          fontFamily: template.body.styles.fontType,
          fontSize: template.body.styles.fontSize,
          fontWeight: template.body.styles.fontWeight,
          color: template.body.styles.fontColor,
          height: template.body.styles.height,
          backgroundColor: template.body.styles.backgroundColor,
        }}
        dangerouslySetInnerHTML={{ __html: template.body.content }}
      ></div>
      <div
        className='text-center p-4 border-t'
        style={{
          fontFamily: template.footer.styles.fontType,
          fontSize: template.footer.styles.fontSize,
          fontWeight: template.footer.styles.fontWeight,
          color: template.footer.styles.fontColor,
          height: template.footer.styles.height,
          backgroundColor: template.footer.styles.backgroundColor,
        }}
        dangerouslySetInnerHTML={{ __html: template.footer.content }}
      ></div>
    </div>
  );
};

export default ResumePreview;

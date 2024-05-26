import React, { useState, useEffect, ChangeEvent } from 'react';
import ResumePreview from './ResumePreview';
import { TemplateSection } from '../components/TemplateSection';
import { TemplateChoices } from '../components/TemplateChoices';
import { TemplateType, initialTemplate } from '../types/template';
import { ResetSection } from '../components/ResetSection';

export const SECTION_CHOICES = ['Header', 'Body', 'Footer', 'Margin'];

export const TemplateBuilder = () => {
  const [template, setTemplate] = useState<TemplateType>(initialTemplate);
  const [editingTemplate, setEditingTemplate] = useState(false);

  const [templateList, setTemplateList] = useState<TemplateType[]>(() => {
    const savedTemplates = localStorage.getItem('templates');
    return savedTemplates ? JSON.parse(savedTemplates) : [];
  });

  const handleChooseTemplate = (templateIdx: number | string) => {
    if (templateIdx === 0) {
      setTemplate({
        ...initialTemplate,
        id: templateList.length + 1,
      });
      setEditingTemplate(false);
      return;
    }

    const chosenTemplate =
      templateList.find((template) => template.id === templateIdx) || null;

    if (chosenTemplate) {
      setTemplate(chosenTemplate);
      setEditingTemplate(true);
    }
  };

  const handleSaveTemplate = () => {
    setTemplate({
      ...initialTemplate,
      id: templateList.length + 1,
    });

    const isTemplateExist =
      templateList.find((_template) => _template.id === template.id) || null;

    if (isTemplateExist) {
      const updatedData = templateList.map((_template) =>
        _template.name === template.name ? template : _template
      );
      setTemplateList(updatedData);
      localStorage.setItem('templates', JSON.stringify(updatedData));
      alert(`Updated Template ${template.name} with new changes`);
      return;
    }

    const saveTemplate = { ...template, id: templateList.length + 1 };
    setTemplateList([...templateList, saveTemplate]);
    localStorage.setItem(
      'templates',
      JSON.stringify([...templateList, saveTemplate])
    );
    alert(`Created new Template ${template.name}`);
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setTemplate({
        ...template,
        watermark: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  useEffect(() => {
    console.log('Update');
  }, [template]);

  return (
    <div className='p-10'>
      <h1 className='text-2xl font-bold mb-4'>Resume Template Editor</h1>
      <div className='mb-4'>
        <label className='block mb-2'>Select Template</label>
        <select
          onChange={(e) => handleChooseTemplate(Number(e.target.value))}
          className='border p-2 w-full'
        >
          <option key={`x-${template.id}`} value=''>
            Create a template
          </option>
          {templateList.map((template) => (
            <option key={`xxx-${template.id}`} value={template.id}>
              {template.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className='mr-4'>Template Name:</label>
        <input
          type='text'
          value={template.name}
          onChange={(e) => setTemplate({ ...template, name: e.target.value })}
          className='border p-2'
        />
      </div>
      <TemplateChoices
        onChange={setTemplate}
        template={template}
        value={template.header.content}
      />
      <div className='flex mb-10 flex-col justify-between'>
        <label className='text-2xl font-semibold'>Header</label>
        <TemplateSection
          onChange={setTemplate}
          template={template}
          type={'Header'}
          templateStyle={template.header.styles}
        />
        <div className='flex justify-end'>
          <ResetSection
            onReset={() =>
              setTemplate({
                ...template,
                header: initialTemplate.header,
              })
            }
            section='Header'
          />
        </div>
      </div>
      <div className='flex mb-10 flex-col justify-between gap-4'>
        <label className='text-2xl font-semibold'>Body</label>
        <TemplateSection
          onChange={setTemplate}
          template={template}
          type={'Body'}
          templateStyle={template.body.styles}
        />
        <div className='flex justify-end'>
          <ResetSection
            onReset={() =>
              setTemplate({
                ...template,
                body: initialTemplate.body,
              })
            }
            section='Body'
          />
        </div>
      </div>
      <div className='flex mb-10 flex-col justify-between gap-4'>
        <label className='text-2xl font-semibold'>Footer</label>
        <TemplateSection
          onChange={setTemplate}
          template={template}
          type='Footer'
          templateStyle={template.footer.styles}
        />
        <div className='flex justify-end'>
          <ResetSection
            onReset={() =>
              setTemplate({
                ...template,
                footer: initialTemplate.footer,
              })
            }
            section='Footer'
          />
        </div>
      </div>
      <div className='flex mb-10 flex-col justify-between gap-4'>
        <label className='text-2xl font-semibold'>Upload Watermark</label>
        <input
          type='file'
          onChange={(e) => handleFileUpload(e)}
          className='border p-2'
        />
      </div>
      <div className='mt-4'>
        <button
          className='bg-blue-500 hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-400 text-2xl text-white px-4 py-2 rounded-lg mr-2 disabled:bg-opacity-15'
          onClick={handleSaveTemplate}
          disabled={!template.name.length}
        >
          {editingTemplate ? 'Save ' : 'Create '} Template
        </button>
      </div>
      <div className='mt-10'>
        <h3 className='text-xl mb-4'>Resume Preview</h3>
        <ResumePreview template={template} />
      </div>
    </div>
  );
};

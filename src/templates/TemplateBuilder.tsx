import { useState, ChangeEvent } from 'react';
import { TemplateSection } from '../components/TemplateSection';
import { TemplateChoices } from '../components/TemplateChoices';
import { initialTemplate } from '../types/template';
import { useTemplateContext } from '../providers/TemplateProvider';

export const SECTION_CHOICES = ['Header', 'Body', 'Footer', 'Margin'];

export const TemplateBuilder = () => {
  const { template, setTemplate, templateList, setTemplateList } =
    useTemplateContext();

  const [editingTemplate, setEditingTemplate] = useState(false);

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

  return (
    <div className='p-10 w-full max-h-screen'>
      <div className='overflow-x-auto overflow-y-auto'>
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
        <div className='mb-8'>
          <label className='mr-4'>Template Name:</label>
          <input
            type='text'
            value={template.name}
            onChange={(e) => setTemplate({ ...template, name: e.target.value })}
            className='border p-2'
          />
        </div>
        <div className='flex flex-col overflow-y-auto'>
          <label className='text-2xl font-semibold'>Apply Attributes</label>
          <label className='text-1xl text-gray-500'>
            Choose the part of the resume that you want the attribute to be
            added to
          </label>
          <TemplateChoices
            onChange={setTemplate}
            template={template}
            value={template.header.content}
          />
        </div>
        <div className='flex mb-10 flex-col justify-between gap-4 overflow-y-auto'>
          <label className='text-2xl font-semibold'>Header</label>
          <TemplateSection
            onChange={setTemplate}
            template={template}
            type={'Header'}
            templateStyle={template.header.styles}
          />
        </div>
        <div className='flex mb-10 flex-col justify-between gap-4 overflow-y-auto'>
          <label className='text-2xl font-semibold'>Body</label>
          <TemplateSection
            onChange={setTemplate}
            template={template}
            type={'Body'}
            templateStyle={template.body.styles}
          />
        </div>
        <div className='flex mb-10 flex-col justify-between gap-4 overflow-y-auto'>
          <label className='text-2xl font-semibold'>Footer</label>
          <TemplateSection
            onChange={setTemplate}
            template={template}
            type='Footer'
            templateStyle={template.footer.styles}
          />
        </div>
        <div className='flex mb-10 flex-col justify-between gap-4'>
          <label className='text-2xl font-semibold'>Upload Watermark</label>
          <input
            type='file'
            onChange={(e) => handleFileUpload(e)}
            className='border p-2'
          />
        </div>
        <div className='my-8'>
          <button
            className='bg-blue-500 hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-400 text-2xl text-white px-4 py-2 rounded-lg mr-2 disabled:bg-opacity-15'
            onClick={handleSaveTemplate}
            disabled={!template.name.length}
          >
            {editingTemplate ? 'Save ' : 'Create '} Template
          </button>
        </div>
      </div>
    </div>
  );
};

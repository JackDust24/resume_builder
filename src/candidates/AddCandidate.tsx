import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CandidateTypePOC, initialCandidate } from '../types/candidate';
import { useTemplateContext } from '../providers/TemplateProvider';

export const AddCandidate = () => {
  const { template, setTemplate, templateList } = useTemplateContext();
  const [candidate, setCandidate] =
    useState<CandidateTypePOC>(initialCandidate);

  const handleGenerateResume = () => {
    if (!template) return;

    const filledTemplate = {
      ...template,
      header: {
        ...template.header,
        content: template.header.content
          .replace('{{name}}', candidate.name)
          .replace('{{contact}}', candidate.personalDetails)
          .replace('{{experience}}', candidate.experience)
          .replace('{{education}}', candidate.education)
          .replace('{{skills}}', candidate.skills)
          .replace('{{linkedIn}}', candidate.linkedIn)
          .replace('{{certifications}}', candidate.certifications)
          .replace('{{references}}', candidate.references)
          .replace('{{description}}', candidate.description),
      },
      body: {
        ...template.body,
        content: template.body.content
          .replace('{{name}}', candidate.name)
          .replace('{{contact}}', candidate.personalDetails)
          .replace('{{experience}}', candidate.experience)
          .replace('{{education}}', candidate.education)
          .replace('{{skills}}', candidate.skills)
          .replace('{{linkedIn}}', candidate.linkedIn)
          .replace('{{certifications}}', candidate.certifications)
          .replace('{{references}}', candidate.references)
          .replace('{{description}}', candidate.description),
      },
      footer: {
        ...template.footer,
        content: template.footer.content
          .replace('{{name}}', candidate.name)
          .replace('{{contact}}', candidate.personalDetails)
          .replace('{{experience}}', candidate.experience)
          .replace('{{education}}', candidate.education)
          .replace('{{skills}}', candidate.skills)
          .replace('{{linkedIn}}', candidate.linkedIn)
          .replace('{{certifications}}', candidate.certifications)
          .replace('{{references}}', candidate.references)
          .replace('{{description}}', candidate.description),
      },
      margin: {
        ...template.margin,
        content: template.margin.content
          .replace('{{name}}', candidate.name)
          .replace('{{contact}}', candidate.personalDetails)
          .replace('{{experience}}', candidate.experience)
          .replace('{{education}}', candidate.education)
          .replace('{{skills}}', candidate.skills)
          .replace('{{linkedIn}}', candidate.linkedIn)
          .replace('{{certifications}}', candidate.certifications)
          .replace('{{references}}', candidate.references)
          .replace('{{description}}', candidate.description),
      },
    };

    setTemplate(filledTemplate);
    alert('Resume generated. Please download the PDF');
  };

  const handleDownloadResume = async () => {
    if (!template) return;
    try {
      const input = document.getElementById('resume-preview');
      const canvas = await html2canvas(input!);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className='p-4'>
      <h2 className='text-2xl mb-4'>Add Candidate Details</h2>
      {templateList.length > 0 ? (
        <>
          <div className='mb-4'>
            <label className='block mb-2'>Select Template</label>
            <select
              onChange={(e) =>
                setTemplate(
                  templateList.find(
                    (template) => template.id === Number(e.target.value)
                  ) || template
                )
              }
              className='border p-2 w-full'
            >
              <option value=''>Select a template</option>
              {templateList.map((template) => (
                <option key={template.id} value={template.id}>
                  {template.name}
                </option>
              ))}
            </select>
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Name</label>
            <input
              type='text'
              value={candidate.name}
              onChange={(e) =>
                setCandidate({ ...candidate, name: e.target.value })
              }
              className='border p-2 w-full'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Contact Info</label>
            <input
              type='text'
              value={candidate.personalDetails}
              onChange={(e) =>
                setCandidate({ ...candidate, personalDetails: e.target.value })
              }
              className='border p-2 w-full'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Experience</label>
            <textarea
              value={candidate.experience}
              onChange={(e) =>
                setCandidate({ ...candidate, experience: e.target.value })
              }
              className='border p-2 w-full'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Education</label>
            <textarea
              value={candidate.education}
              onChange={(e) =>
                setCandidate({ ...candidate, education: e.target.value })
              }
              className='border p-2 w-full'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Skills</label>
            <textarea
              value={candidate.skills}
              onChange={(e) =>
                setCandidate({ ...candidate, skills: e.target.value })
              }
              className='border p-2 w-full'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Certifications</label>
            <textarea
              value={candidate.certifications}
              onChange={(e) =>
                setCandidate({ ...candidate, certifications: e.target.value })
              }
              className='border p-2 w-full'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>LinkedIn</label>
            <textarea
              value={candidate.linkedIn}
              onChange={(e) =>
                setCandidate({ ...candidate, linkedIn: e.target.value })
              }
              className='border p-2 w-full'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>References</label>
            <textarea
              value={candidate.references}
              onChange={(e) =>
                setCandidate({ ...candidate, references: e.target.value })
              }
              className='border p-2 w-full'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Description</label>
            <textarea
              value={candidate.description}
              onChange={(e) =>
                setCandidate({ ...candidate, description: e.target.value })
              }
              className='border p-2 w-full'
            />
          </div>
          <div className='flex justify-between gap-12'>
            <button
              onClick={handleGenerateResume}
              className='rounded-lg bg-blue-500 hover:bg-blue-700 active:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 text-white p-2 text-xl'
            >
              Generate Resume
            </button>

            <button
              onClick={handleDownloadResume}
              className='bg-green-500 hover:bg-green-700 active:bg-green-600 focus:outline-none focus:ring focus:ring-green-800 text-white p-2 rounded'
            >
              Download Resume as PDF
            </button>
          </div>
        </>
      ) : (
        <p>No Templates set up</p>
      )}
    </div>
  );
};

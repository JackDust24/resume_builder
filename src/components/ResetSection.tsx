import { TemplateType } from '../types/template';

export const ResetSection = ({
  onReset,
  section,
}: {
  onReset: () => void;
  section: string;
}) => {
  return (
    <div>
      <button
        onClick={onReset}
        className='bg-red-400 hover:bg-red-500 active:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 text-white px-4 py-2 rounded mr-2 disabled:bg-opacity-15'
      >
        Reset {section} Styles
      </button>
    </div>
  );
};

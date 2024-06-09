import { ReactElement } from 'react';

export const TemplateBuilderScreen = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  return (
    <div className='bg-green-300 h-screen overflow-y-auto'>{children}</div>
  );
};

export const TemplatePreviewScreen = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  return (
    <div className='bg-white-300 h-screen overflow-y-auto'>
      <h1 className='text-xl mb-4 mt-10'>Resume Preview</h1>
      {children}
    </div>
  );
};

export const CandidateScreen = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  return <div className='bg-red-300 h-screen overflow-y-auto'>{children}</div>;
};

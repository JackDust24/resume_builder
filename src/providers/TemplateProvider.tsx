import {
  createContext,
  useContext,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { TemplateType, initialTemplate } from '../types/template';

type Templates = {
  template: TemplateType;
  setTemplate: Dispatch<SetStateAction<TemplateType>>;
  templateList: TemplateType[];
  setTemplateList: Dispatch<SetStateAction<TemplateType[]>>;
};
const TemplateContext = createContext<Templates | undefined>(undefined);

export const useTemplateContext = (): Templates => {
  const context = useContext(TemplateContext);
  if (context === undefined) {
    throw new Error(
      'useTemplateContext can not be used outside TemplateContext Provider'
    );
  }
  return context;
};

interface TemplatesProviderProps {
  children: React.ReactNode;
}

export const TemplateProvider = ({
  children,
}: TemplatesProviderProps): JSX.Element => {
  const [template, setTemplate] = useState<TemplateType>(initialTemplate);
  const [templateList, setTemplateList] = useState<TemplateType[]>(() => {
    const savedTemplates = localStorage.getItem('templates');
    return savedTemplates ? JSON.parse(savedTemplates) : [];
  });

  const templates = useMemo(
    () => ({
      template,
      setTemplate,
      templateList,
      setTemplateList,
    }),
    [template, setTemplate, templateList, setTemplateList]
  );

  return (
    <TemplateContext.Provider value={templates}>
      {children}
    </TemplateContext.Provider>
  );
};

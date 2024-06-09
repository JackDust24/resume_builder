import { TemplateBuilder } from '../templates/TemplateBuilder';
import { AddCandidate } from '../candidates/AddCandidate';
import { SplitScreen } from '../layouts/SplitScreen';
import {
  CandidateScreen,
  TemplateBuilderScreen,
  TemplatePreviewScreen,
} from '../layouts/components/sidescreens';
import { ResumePreview } from '../templates/ResumePreview';
import { useTemplateContext } from '../providers/TemplateProvider';

export const Home = () => {
  const { template } = useTemplateContext();
  return (
    <>
      <SplitScreen leftWeight={'auto'} centerWeight={1} rightWeight={'auto'}>
        <TemplateBuilderScreen>
          <TemplateBuilder />
        </TemplateBuilderScreen>
        <TemplatePreviewScreen>
          <ResumePreview template={template} />
        </TemplatePreviewScreen>
        <CandidateScreen>
          <AddCandidate />
        </CandidateScreen>
      </SplitScreen>
    </>
  );
};

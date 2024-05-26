type PersonalDetails = {
  address: string;
  phoneNumber: string;
  email: string;
};

type Name = {
  firstname: String;
  lastName: string;
};

type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};

type Institution = 'University' | 'College' | 'School';

type Education = {
  degree: string;
  major: string;
  institution: Institution;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};

type Certifications = {
  name: string;
  date: string;
};

type Skill = {
  name: string;
  score: number;
};

type CandidateType = {
  id: number;
  name: Name;
  personalDetails: PersonalDetails;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  certifications?: Certifications[];
  linkedIn: string;
  references: string[];
  description: string;
};

// The POC type
type CandidateTypePOC = {
  id: number;
  name: string; // TODO: Will change to firstname + lastname when all working
  personalDetails: string;
  skills: string;
  experience: string;
  education: string;
  certifications: string;
  linkedIn: string;
  references: string;
  description: string;
};

// A default initial candidate
const initialCandidate: CandidateTypePOC = {
  id: 0,
  name: '',
  personalDetails: '',
  skills: '',
  experience: '',
  education: '',
  certifications: '',
  linkedIn: '',
  references: '',
  description: '',
};

export type { CandidateType, CandidateTypePOC };

export { initialCandidate };

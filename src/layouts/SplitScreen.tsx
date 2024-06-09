import { ReactElement } from 'react';

interface SplitScreenProps {
  children: ReactElement[];
  leftWeight?: number | string;
  centerWeight?: number | string;
  rightWeight?: number | string;
}

export const SplitScreen = ({
  children,
  leftWeight = 1,
  centerWeight = 1,
  rightWeight = 1,
}: SplitScreenProps) => {
  const [left, center, right] = children;
  return (
    <div className='flex min-h-screen '>
      <div className={`flex-${leftWeight} w-1/3`}>{left}</div>
      <div className={`flex-${centerWeight} w-1/3`}>{center}</div>
      <div className={`flex-${rightWeight} w-1/3`}>{right}</div>
    </div>
  );
};

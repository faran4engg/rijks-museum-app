import { ReactNode } from 'react';
import { ArtObjectsEntity } from 'app/kernel/types';

interface ChildrenProps {
  isLoading: boolean;
  images?: ArtObjectsEntity[];
}

export interface OwnProps {}
export interface RenderProps {
  children: (props: ChildrenProps) => ReactNode;
}

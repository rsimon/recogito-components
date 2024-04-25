import { ReplyField } from './ReplyField';
import { cn } from './util';

import './Annotation.css';
import { AnnotationSection } from './AnnotationSection';

interface AnnotationProps {

  isEditable?: boolean;

  isNote?: boolean;

  isPrivate?: boolean;

  isReadOnly?: boolean;

  showReplyField?: boolean;

  tags?: string[];

  value?: string;

}

export const Annotation = (props: AnnotationProps) => {

  const className = cn(
    'annotation',
    props.isNote ? 'note' : undefined,
    props.isPrivate ? 'private' : undefined,
    props.isReadOnly ? 'readonly' : undefined
  );

  return (
    <div className={className}>
      <AnnotationSection
        isEditable={props.isEditable}
        isPrivate={props.isPrivate}
        value={props.value} 
        tags={props.tags} />

      {props.showReplyField && !props.isReadOnly && !props.isEditable && (
        <ReplyField />
      )}
    </div>
  )

}
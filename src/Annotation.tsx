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

  value?: string | string[];

}

export const Annotation = (props: AnnotationProps) => {

  const values = Array.isArray(props.value) ? props.value : [props.value];

  const className = cn(
    'annotation',
    props.isNote ? 'note' : undefined,
    props.isPrivate ? 'private' : undefined,
    props.isReadOnly ? 'readonly' : undefined
  );

  return (
    <div className={className}>
      {values.map((value, idx) => (
        <AnnotationSection
          key={`index-${idx}`}
          isEditable={props.isEditable}
          isPrivate={props.isPrivate}
          value={value} 
          tags={props.tags} />
      ))}

      {props.showReplyField && !props.isReadOnly && !props.isEditable && (
        <ReplyField />
      )}
    </div>
  )

}
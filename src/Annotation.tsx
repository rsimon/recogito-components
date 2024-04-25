import { useState } from 'react';
import { ReplyField } from './ReplyField';
import { AnnotationSection } from './AnnotationSection';
import { Interstitial } from './Interstitial';
import { cn } from './util';

import './Annotation.css';

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

  const [collapse, setCollapse] = useState(values.length > 3); 

  const className = cn(
    'annotation',
    props.isNote ? 'note' : undefined,
    props.isPrivate ? 'private' : undefined,
    props.isReadOnly ? 'readonly' : undefined
  );

  return (
    <div className={className}>
      {collapse ? (
        <>
          <AnnotationSection
            isEditable={props.isEditable}
            isPrivate={props.isPrivate}
            value={values[0]} 
            tags={props.tags} />

          <Interstitial
            label="Show 3 more" 
            onClick={() => setCollapse(false)} />

          <AnnotationSection
            isEditable={props.isEditable}
            isPrivate={props.isPrivate}
            value={values[values.length - 1]} 
            tags={props.tags} />
        </>
      ) : values.map((value, idx) => (
        <AnnotationSection
          key={`index-${idx}`}
          isEditable={props.isEditable}
          isPrivate={props.isPrivate}
          value={value} 
          tags={props.tags} />
      ))}

      {props.showReplyField && !props.isReadOnly && (
        <ReplyField />
      )}
    </div>
  )

}
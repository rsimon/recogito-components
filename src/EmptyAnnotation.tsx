import { useEffect, useState } from 'react';
import { ArrowRight, Detective } from '@phosphor-icons/react';
import { Delta } from 'quill/core';
import { Avatar } from './Avatar';
import { QuillEditor, QuillEditorRoot, QuillEditorToolbar } from './QuillEditor';
import { AddTag } from './Tags/AddTag';
import { cn } from './util';

import './EmptyAnnotation.css';

interface EmptyAnnotationProps {

  isNote?: boolean;

  isPrivate?: boolean;

}

export const EmptyAnnotation = (props: EmptyAnnotationProps) => {

  const [value, setValue] = useState<Delta>(new Delta());

  useEffect(() => {
    console.log(value);
  }, [value]);

  const className = cn(
    'annotation empty',
    props.isNote ? 'note' : undefined,
    props.isPrivate ? 'private' : undefined
  );

  return (
    <div className={className}>
      <QuillEditorRoot>
        <div className="annotation-header">
          <div className="annotation-header-left">
            {props.isPrivate ? (
              <div className="private-avatar">
                <div className="avatar-ring">
                  <div className="avatar-inner">
                    <Detective size={17} />
                  </div>
                </div>
              </div>
            ) : (
              <Avatar />
            )}
          </div>

          <div className="annotation-toolbar-wrapper">
            <QuillEditorToolbar />
          </div>
        </div>
        
        <div className="annotation-comment-wrapper">
          <QuillEditor 
            value={value}
            onChange={setValue}
            placeholder="Add a comment" />
        </div>

        <div className="annotation-footer">
          <AddTag 
            onAddTag={() => {}}
            onCancel={() => {}} />

          <button className="save save-arrow">
            <ArrowRight size={20} />
          </button>
        </div>
      </QuillEditorRoot>
    </div>
  )

}
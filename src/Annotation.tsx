import { Detective, DotsThree } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import { AuthorDetails } from './AuthorDetails';
import { QuillEditor, QuillEditorRoot } from './QuillEditor';
import { ReplyField } from './ReplyField';
import { TagList } from './Tags/TagList';
import { cn } from './util';

import './Annotation.css';

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
          <AuthorDetails isPrivate={props.isPrivate} />
        </div>

        <div className="annotation-header-right">
          <DotsThree size={20} />
        </div>
      </div>

      <div className="annotation-comment-wrapper">
        <QuillEditorRoot>
          <QuillEditor 
            readOnly={!props.isEditable}
            value={props.value || 'Lorem ipsum dolor sit amet consectetur.' }/>
        </QuillEditorRoot>
      </div>

      {props.tags?.length > 0 && (
        <div className="annotation-taglist-wrapper">
          <TagList 
            tags={props.tags} 
            isEditable={props.isEditable} />
        </div>
      )}

      {props.showReplyField && !props.isReadOnly && (
        <ReplyField />
      )}
    </div>
  )

}
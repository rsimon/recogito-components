import { Detective, DotsThree } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import { AuthorDetails } from './AuthorDetails';
import { QuillEditor, QuillEditorRoot } from './QuillEditor';
import { TagList } from './Tags/TagList';

import './AnnotationSection.css';

interface AnnotationSectionProps {

  isEditable?: boolean;

  isPrivate?: boolean;

  tags?: string[];

  value?: string;

}

export const AnnotationSection = (props: AnnotationSectionProps) => {

  return (
    <div className="annotation-section">
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

      {props.isEditable && (
        <div className="annotation-section-footer align-right">
          <button className="sm flat">
            Cancel
          </button>

          <button className="sm flat primary">
            Save
          </button>
        </div>
      )}
    </div>
  )

}
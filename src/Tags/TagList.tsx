import { Tag } from './Tag';

import './TagList.css';

interface TagListProps {

  isEditable?: boolean;

  tags: string[];

}

export const TagList = (props: TagListProps) => {

  return (
    <ul className="taglist">
      {props.tags.map(t => (
        <li key={t}>
          <Tag value={t} isEditable={props.isEditable} />
        </li>
      ))}
    </ul>
  )

}
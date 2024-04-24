import { Tag } from './Tag';

import './TagList.css';

interface TagListProps {

  tags: string[];

}

export const TagList = (props: TagListProps) => {

  return (
    <ul className="taglist">
      {props.tags.map(t => (
        <Tag value={t} />
      ))}
    </ul>
  )

}
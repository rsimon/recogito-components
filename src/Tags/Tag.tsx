import './Tag.css';

interface TagProps {

  value: string;

}

export const Tag = (props: TagProps) => {

  return (
    <span className="tag">{props.value}</span>
  )

}
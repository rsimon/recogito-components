import './Avatar.css';

interface AvatarProps {

  color?: string;

}

export const Avatar = (props: AvatarProps) => {

  return (
    <div className="avatar">
      <div className="avatar-ring">
        <div className="avatar-inner">C</div>
      </div>
    </div>
  )

}
import { GrStatusPlaceholderSmall } from "react-icons/gr";

interface typeIconProps {
  style?: string; 
}
const IconPlaceholder = ({style}:typeIconProps) => {
  return (
    <GrStatusPlaceholderSmall  className={style ? style : ""}/>
  )
}

export default IconPlaceholder
import { Select } from './style';

const CustomSelectbox = ({ children, ...props }) => {
  return <Select {...props}>{children}</Select>;
};

export default CustomSelectbox;

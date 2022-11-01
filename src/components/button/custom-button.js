import { Button } from './style';

const CustomButton = ({ primary, title, width, onClick }) => {
  return (
    <Button onClick={onClick} primary={primary} width={width}>
      {title}
    </Button>
  );
};

export default CustomButton;

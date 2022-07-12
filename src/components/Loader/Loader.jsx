import { MdOutlineCameraswitch } from 'react-icons/md';
import LoaderWrapper from './Loader.style';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <MdOutlineCameraswitch
        width={'40px'}
        height={'40px'}
        fill={'currentColor'}
      />
    </LoaderWrapper>
  );
};

export default Loader;

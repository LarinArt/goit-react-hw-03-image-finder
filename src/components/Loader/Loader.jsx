import { MdOutlineCameraswitch } from 'react-icons/md';
import LoaderWrapper from './Loader.style';

function Loader() {
  return (
    <LoaderWrapper>
      <MdOutlineCameraswitch
        width={'40px'}
        height={'40px'}
        fill={'currentColor'}
      />
    </LoaderWrapper>
  );
}

export default Loader;

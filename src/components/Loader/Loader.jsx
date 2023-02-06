import { Watch } from 'react-loader-spinner';
import { PositionLoader } from './Loader.styled';

const Loader = () => {
  return (
    <PositionLoader>
      <Watch
        height="60"
        width="60"
        radius="48"
        color="#000"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </PositionLoader>
  );
};

export default Loader;

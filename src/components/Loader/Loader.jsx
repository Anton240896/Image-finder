import { TailSpin } from 'react-loader-spinner';
import { LoaderContainer } from './loader.styled';

export const Loader = () => (
  <LoaderContainer>
    <TailSpin
      height="100"
      width="100"
      radius="9"
      ariaLabel="Loading"
      color="#089556"
    />
  </LoaderContainer>
);

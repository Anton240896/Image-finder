import { TailSpin } from 'react-loader-spinner';
import { LoaderContainer } from './loader.styled';

export const Loader = () => (
  <LoaderContainer>
    <TailSpin
      height="70"
      width="70"
      radius="9"
      ariaLabel="Loading"
      color="#04f1c9"
    />
  </LoaderContainer>
);

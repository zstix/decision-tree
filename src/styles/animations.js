import { keyframes } from 'styled-components';

export const slideUp = keyframes`
  0% {
    clip-path: inset(100% 0 50% 0);
    opacity: 0;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    clip-path: inset(0);
    opacity: 0.8;
  }
`;

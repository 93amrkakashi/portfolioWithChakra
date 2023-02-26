import { keyframes } from "@emotion/react";




export const animation = keyframes`
0%{
  transform: translateY(0)
}
50%{
  transform: translateY(20px)
}
100%{
  transform: translateY(0)
}
`;



export const roboAnimation = `${animation} infinite 2s`;

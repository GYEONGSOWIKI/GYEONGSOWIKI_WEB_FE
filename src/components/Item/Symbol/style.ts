import styled from "styled-components";
import { motion } from "framer-motion";

export const TopCont = styled.div`
  background-color: var(--main-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MotionWrap = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    align-self: center;
    max-width: 70px;
  }
`;

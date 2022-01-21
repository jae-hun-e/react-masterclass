import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const { scrollYProgress } = useViewportScroll();
  const x = useMotionValue(0);

  const size = useTransform(scrollYProgress, [0, 1], [2, 0.4]);
  const rotateZ = useTransform(x, [-300, 0, 300], [-720, 0, 720]);
  return (
    <Box>
      <ScrollBox
        style={{ scale: size, rotateZ, x }}
        drag="x"
        dragSnapToOrigin
      />
    </Box>
  );
}

const Box = styled.div`
  margin: 30px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScrollBox = styled(motion.div)`
  margin: 30px;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

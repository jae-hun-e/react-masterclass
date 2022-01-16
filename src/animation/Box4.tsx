import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const boxVariants = {
  drag: { backgroundColor: "rgb(46,203,113)", transition: { duration: 0.5 } },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <BigBox ref={biggerBoxRef}>
      <Box
        variants={boxVariants}
        drag
        // dragSnapToOrigin //! 제자리로 돌아오기
        // dragElastic={0.5} //! 관성력 (0~1)
        dragConstraints={biggerBoxRef} //! 제약 공간
        whileDrag="drag" //! drag
      />
    </BigBox>
  );
}

const BigBox = styled.div`
  margin: 30px;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const boxVariants = {
  entry: (custom: boolean) => ({
    x: custom ? -400 : 400,
    opacity: 0,
    scale: 0,
  }),
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: (custom: boolean) => ({
    x: custom ? 400 : -400,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  }),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextBtn = () => {
    setBack(false);
    setVisible((prev) => (prev === 5 ? 1 : prev + 1));
  };
  const prevBtn = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 5 : prev - 1));
  };

  return (
    <Wrapper>
      <AnimatePresence exitBeforeEnter custom={back}>
        {/* {[1, 2, 3, 4, 5].map((i) =>
          i === visible ? (
            <Box
              variants={boxVariants}
              initial="invisible"
              animate="visible"
              exit="exit"
              key={i}
            >
              {i}
            </Box>
          ) : null
        )} */}
        <Box
          custom={back}
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <BtnList>
        <button onClick={prevBtn}>prev</button>
        <button onClick={nextBtn}>next</button>
      </BtnList>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 150px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  color: red;
`;

const BtnList = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

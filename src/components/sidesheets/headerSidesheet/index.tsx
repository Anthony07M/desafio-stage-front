import { Dispatch, SetStateAction } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Container } from "./styles";

interface HeaderSideSheetProps {
  headerTitle: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderSideSheet = ({
  headerTitle,
  setIsOpen,
}: HeaderSideSheetProps) => {
  return (
    <Container>
      <AiOutlineArrowRight onClick={() => setIsOpen(false)} />
      <p>{headerTitle}</p>
    </Container>
  );
};

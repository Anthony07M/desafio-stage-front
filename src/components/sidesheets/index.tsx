import { ScaleLoader } from 'react-spinners';
import { HeaderSideSheet } from './headerSidesheet';
import { Container } from './styles';

interface SidesheetProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode
  onClose: () => void;
}

export const SideSheet = ({ isOpen, onClose, title, children }: SidesheetProps) => {

  return (
    <Container>
      <div className={`side-sheet ${isOpen ? 'open' : ''}`}>
        <HeaderSideSheet
          headerTitle={title}
          setIsOpen={onClose}
        />
        <div className="side-sheet-content">
          
          {isOpen && children}
        </div>
      </div>
    </Container>
  );
};


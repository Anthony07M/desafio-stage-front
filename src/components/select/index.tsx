import React, { useState } from "react";
import {
  ArrowIcon,
  ContainerSelect,
  OptionItem,
  OptionList,
  SelectedOption,
} from "./styles";

type Option = {
  value: string;
  label: string;
};

interface SelectProps {
  options: Option[];
  onSelect?: (value: string) => void;
  label?: string;
}

export const Select = ({ options, onSelect, label }: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect && onSelect(value);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ContainerSelect isOpen={isOpen}>
      {label && <label htmlFor={label}>{label}</label>}
      <SelectedOption onClick={handleToggle}>
        {selectedValue === "" && "Selecione"}
        {options.find((option) => option.value === selectedValue)?.label}
        <ArrowIcon />
      </SelectedOption>
      <OptionList labelfull={label ? true : false} isOpen={isOpen}>
        {options.map((option, index) => (
          <OptionItem key={index} onClick={() => handleSelect(option.value)}>
            {option.label}
          </OptionItem>
        ))}
      </OptionList>
    </ContainerSelect>
  );
};

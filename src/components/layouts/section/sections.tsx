import React, { useState } from 'react';
import Div from '@elements/div'
import { SectionsProps } from './sections.props';

const Sections = ({ menu }: SectionsProps) => {
  const [section, setSection] = useState('info');

  const handleChangeSection = ({ section }: { section: string }) => {
    setSection(section);
  };

  return (
    <Div>
    </Div>
  );
};

export default Sections;

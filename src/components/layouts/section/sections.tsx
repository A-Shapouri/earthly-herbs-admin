import React, { useState } from 'react';
import Div from '@elements/div'
import { SectionsProps, SectionTypes } from './sections.props';

const Sections = ({ menu }: SectionsProps) => {
  const [section, setSection] = useState<SectionTypes>('info');

  const handleChangeSection = ({ section }: { section: SectionTypes }) => {
    setSection(section);
  };

  return (
    <Div>
    </Div>
  );
};

export default Sections;

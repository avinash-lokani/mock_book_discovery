import React from 'react';
import BookCards from '../../organisms/bookCards';
import LandingTemplate from '../../templates/landingTemplate';

const Library: React.FC = () => {
	return <LandingTemplate template={<BookCards title={'My Library'} />} />;
};

export default Library;

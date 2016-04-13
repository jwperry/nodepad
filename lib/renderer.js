import React from 'react';
import { render } from 'react-dom';
import Application from './components/application';

//grab Application component and load it into the page in 'application' section
render(<Application />, document.querySelector('.application'));

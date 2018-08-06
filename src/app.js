import React from 'react';
import ReactDOM from 'react-dom';
import ShowResult from './components/ShowResult';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


//call ShowResult components and render the data in index.html
ReactDOM.render(<ShowResult/>, document.getElementById('app'));

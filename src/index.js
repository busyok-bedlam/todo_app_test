import "@babel/polyfill";

import React from 'react';
import { render } from 'react-dom';

import store from './store';
import Root from './components/root';

const root = document.getElementById("root");
render(<Root store={store}/>, root);
// eslint-disable-next-line
// import raf from './tempPolyfills'
import {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {configure} from 'enzyme';
import sinon from 'sinon';
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;
//import toJson from 'enzyme-to-json'
function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};
copyProps(window, global);
// React 16 Enzyme adapter
configure({adapter: new Adapter()});

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;
//global.toJson = toJson


// Fail tests on any warning
console.error = message => {
    //throw new Error(message)
};
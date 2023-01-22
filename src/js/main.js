import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    forms();
});
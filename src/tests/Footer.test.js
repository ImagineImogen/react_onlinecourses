import React from 'react';
import ReactDom from 'react-dom';
import  Footer  from '../components/Footer.js';


it("Footer rendering", ()=> {
    const div = document.createElement("div");
    ReactDom.render(<Footer />, div)
})
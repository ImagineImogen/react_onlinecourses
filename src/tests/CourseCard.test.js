import React from 'react';
import ReactDom from 'react-dom';
import  CourseCard  from '../components/CourseCard.js';
//import { render } from '@testing-library/react'
import ShallowRenderer from 'react-test-renderer/shallow';


it("renders CourseCard correctly", () => {
    const renderer = new ShallowRenderer();
    const getByTestId  = renderer.render(<CourseCard title='Test Course' />)
    expect(getByTestId('title')).toHaveTextContent('Test Course')
})



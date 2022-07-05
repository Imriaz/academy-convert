import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

it('Rendering Multiple Image',async ()=>{
    render(<Footer/>);
    const footerElement=await screen.findAllByRole('img');
    expect(footerElement.length).toBe(5);
})
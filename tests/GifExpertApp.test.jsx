import { fireEvent, render, screen } from "@testing-library/react";
import { GifItem } from "../src/Components";

describe('Text <GifExpertApp />', () => { 
    const image = {
        id: 'id',
        url: 'https://image.com/image',
        title: 'title'
    }
    test('Should Match to Snapchot', () => { 
        const { container } = render( <GifItem image={ image } /> )
        expect(  container ).toMatchSnapshot();
     });

     test('should show image and title', () => { 
        render( <GifItem image={ image } /> )
        screen.debug();
        //expect( screen.getByRole( 'img' ).src ).toBe( image.url );
        const { src } = screen.getByRole( 'img' );
        expect( src ).toBe( image.url );
        expect( screen.getByText( image.title ) ).toBeTruthy();
      })
 })
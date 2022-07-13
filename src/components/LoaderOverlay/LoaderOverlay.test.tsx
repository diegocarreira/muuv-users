import { fireEvent, render, screen } from '@testing-library/react';
import LoaderOverlay from './LoaderOverlay';


describe('LoaderOverlay component tests',()=>{

  it('should NOT render if active prop is NOT in place', async () => {
    render(<LoaderOverlay />);
    
    const overlayComponent = screen.queryByTestId('overlay-component');
    expect(overlayComponent).toBeNull();
    
    const overlayComponentMessage = screen.queryByTestId('overlay-component-message');
    expect(overlayComponentMessage).toBeNull();

  })

  it('should render the overlay is active prop is in place', async () => {
    const messagePropForAssertion = 'testing loading';
    render(<LoaderOverlay active={true} message={messagePropForAssertion} />);
    
    const overlayComponent = screen.getByTestId('overlay-component');
    expect(overlayComponent).toBeInTheDocument();
    
    const overlayComponentMessage = screen.getByTestId('overlay-component-message');
    expect(overlayComponentMessage).toHaveTextContent(messagePropForAssertion);

  })
  
})
import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from './Pagination';


describe('Pagination component tests',()=>{

  it('should NOT render pages when there is NOT totalPages props', async () => {
    render(<Pagination totalPages={0} onClickPage={()=>{}}  />);
    
    const elements = screen.queryAllByRole('listitem');
    expect(elements.length).toBe(0);
    
    const title = screen.queryByText('Pages:');
    expect(title).toBeNull();

  })

  it('should render the pages list if there is pages to show', async () => {
    const handleClickMock = jest.fn();
    render(<Pagination totalPages={3} onClickPage={handleClickMock}  />);
    
    const elements = screen.queryAllByRole('listitem');
    expect(elements.length).toBe(3);

    
    const title = screen.getByText('Pages:');
    expect(title).toBeInTheDocument();
    
    fireEvent.click(elements[0])
    expect(elements[0]).toHaveClass('active');
    fireEvent.click(elements[1])
    expect(elements[1]).toHaveClass('active');
    fireEvent.click(elements[2])
    expect(elements[2]).toHaveClass('active');

  })
  it('should change the active page by click', async () => {
    const handleClickMock = jest.fn();
    render(<Pagination totalPages={3} onClickPage={handleClickMock}  />);
    
    const elements = screen.queryAllByRole('listitem');
    
    fireEvent.click(elements[0])
    expect(elements[0]).toHaveClass('active');
    fireEvent.click(elements[1])
    expect(elements[1]).toHaveClass('active');
    fireEvent.click(elements[2])
    expect(elements[2]).toHaveClass('active');

  })
})
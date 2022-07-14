import { useEffect, useState } from 'react';
import './Pagination.scss';
type PaginationPropsType = {
  totalPages: number;
  onClickPage: (pageNumber: number) => void;
};
const Pagination = ({ totalPages, onClickPage }: PaginationPropsType) => {
  const [activePage, setActivePage] = useState<number>(1);
  const [pagesArray, setPagesArray] = useState<number[]>([]);

  const handleClick = async (pageNumber: number) => {
    if(
        pageNumber > 0
        &&
        pageNumber !== activePage
      ){
      setActivePage(pageNumber);
      onClickPage(pageNumber);
    }
  };

  useEffect(()=>{

    let aux = [];
    for(let i = 1; i <= totalPages; i++){
      aux.push(i);
    }
    setPagesArray(aux);
  },[totalPages])

  if(!totalPages){
    return null;
  }

  return (
    <div className='pagination-container'>
      <span className='title'>Pages:</span>
      <ul className='pagination-list'>
        
        { pagesArray.map((pag:number)=> {          
          return (
            <li onClick={()=>{ handleClick(pag) }} className={`${activePage === pag ? "active" : "" }`} key={pag}>{pag}</li>
          )
        } )}

      </ul>


    </div>
  );
};

export default Pagination;

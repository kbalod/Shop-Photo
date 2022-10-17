import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { DEFAULT_MAX_SIMILAR, SIMILAR_STEP, START_SIMILAR_INDEX } from '../../const';
import { Camera } from '../../types/data';

type Props = {
    visibleSimilar: Camera[],
    currentSimilar: number,
    setCurrentSimilar: (number: number) => void,
}

function SimilarProductsButtons({visibleSimilar,currentSimilar,setCurrentSimilar}: Props) {
  const {id} = useParams();

  useEffect(()=> {
    if(id){
      setCurrentSimilar(START_SIMILAR_INDEX);
    }

  },[id,setCurrentSimilar]);

  return (
    <>
      <button className="slider-controls-new slider-controls--prev"
        type="button"
        aria-label="Предыдущий слайд"
        onClick={()=>setCurrentSimilar(currentSimilar - SIMILAR_STEP)}
        disabled={currentSimilar === START_SIMILAR_INDEX}
        data-testid="left-arrow"
      >
        <svg width="7" height="12" aria-hidden="true">
          <use xlinkHref="#icon-arrow"></use>
        </svg>
      </button>
      <button className="slider-controls-new slider-controls--next"
        type="button"
        aria-label="Следующий слайд"
        onClick={()=>setCurrentSimilar(currentSimilar + SIMILAR_STEP)}
        disabled={currentSimilar >= visibleSimilar.length - DEFAULT_MAX_SIMILAR}
        data-testid="right-arrow"
      >
        <svg width="7" height="12" aria-hidden="true">
          <use xlinkHref="#icon-arrow"></use>
        </svg>
      </button>
    </>
  );
}

export default SimilarProductsButtons;

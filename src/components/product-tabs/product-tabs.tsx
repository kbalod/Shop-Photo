import {useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Camera } from '../../types/data';

type Props = {
    product: Camera,
    description: boolean,
    setDescription: (boolean : boolean)=> void,
}

function ProductTabs({product,description,setDescription}: Props) {
  const params = useParams();
  const navigate = useNavigate();
  const {id} = params;
  const handleTabButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if(target.dataset.tab === 'option'){
      setDescription(true);
      navigate(`${AppRoute.Camera}${id}/${'option'}`);
    }
    if(target.dataset.tab === 'description'){
      setDescription(false);
      navigate(`${AppRoute.Camera}${id}/${'description'}`);
    }
  };
  useEffect(() => {
    window.scrollTo({top: 0});
    if(params.tabs === 'option'){
      setDescription(true);
    }
    if(params.tabs === 'description'){
      setDescription(false);
    }
  }, [id, params.tabs, setDescription]);
  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button className={`tabs__control ${description === true ? 'is-active' : ''}`}
          type="button"
          onClick={handleTabButtonClick}
          data-tab={'option'}
        >
          Характеристики
        </button>
        <button className={`tabs__control ${description === false ? 'is-active' : ''}`}
          type="button"
          onClick={handleTabButtonClick}
          data-tab={'description'}
        >
          Описание
        </button>
      </div>
      <div className='tabs__content is-active'>
        <div className={`tabs__element ${description === true ? 'is-active' : ''}`}>
          <ul className="product__tabs-list">
            <li className="item-list">
              <span className="item-list__title">Артикул:</span>
              <p className="item-list__text"> {product.vendorCode}</p>
            </li>
            <li className="item-list">
              <span className="item-list__title">Категория:</span>
              <p className="item-list__text">{product.category}</p>
            </li>
            <li className="item-list">
              <span className="item-list__title">Тип камеры:</span>
              <p className="item-list__text">{product.type}</p>
            </li>
            <li className="item-list">
              <span className="item-list__title">Уровень:</span>
              <p className="item-list__text">{product.level}</p>
            </li>
          </ul>
        </div>
        <div className={`tabs__element ${description === false ? 'is-active' : ''}`}>
          <div className='product__tabs-text'>
            <p data-testid={'description'}>{product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTabs;

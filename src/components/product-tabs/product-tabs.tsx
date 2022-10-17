import { Camera } from '../../types/data';

type Props = {
    product: Camera,
    description: boolean,
    setDescription: (boolean : boolean)=> void,
}

function ProductTabs({product,description,setDescription}: Props) {
  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button className={`tabs__control ${description === false ? 'is-active' : ''}`}
          type="button"
          onClick={()=> setDescription(false)}
        >
          Характеристики
        </button>
        <button className={`tabs__control ${description === true ? 'is-active' : ''}`}
          type="button"
          onClick={()=> setDescription(true)}
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

// Розробити список покупок. Корстувач у формі
// поступово додає назву товару і кількість і товари
// поступово додаються у список покупок.

import { useState } from 'react';

function ProductManager() {
  const [productList, setProductList] = useState(() => []);
  const [productTitle, setProductTitle] = useState('');
  const [productNumber, setProductNumber] = useState(0);

  function changeProductTitleHandler(e) {
    const val = e.target.value;
    setProductTitle(val);
  }

  function changeProductNumberHandler(e) {
    const val = parseInt(e.target.value);
    setProductNumber(val);
  }

  function addProductHandler() {
    setProductList((prevList) => [
      ...prevList,
      {
        id: new Date().getTime(),
        title: productTitle,
        number: productNumber,
      },
    ]);
    setProductTitle('');
    setProductNumber(0);
  }

  return (
    <div className="container">
      <div className="task">
        <div className="task__condition">
          Розробити список покупок. Корстувач у формі поступово додає назву
          товару і кількість і товари поступово додаються у список покупок.
        </div>
        <div className="task__solution">
          <div className="add-product">
            <label>
              Назва товару:
              <input
                type="text"
                value={productTitle}
                onChange={changeProductTitleHandler}
              />
            </label>
            <label>
              Кількість товару:
              <input
                type="number"
                value={productNumber}
                onChange={changeProductNumberHandler}
              />
            </label>
            <button
              className={productTitle && productNumber ? null : 'disabled'}
              onClick={addProductHandler}
              type="button">
              Add product
            </button>
          </div>
          {productList.length > 0 && (
            <ul className="product-list">
              {productList.map((product) => (
                <li
                  key={product.id}>{`${product.title} - ${product.number}`}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductManager;

import {useState} from 'react';
import IconNext from '../assets/icon-next.svg';
import IconPrevious from '../assets/icon-previous.svg';

const ProductImage = ({lrgImages}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const multipleImages = lrgImages.length > 1 ? true : false;
  console.log(currentImageIndex);
  function handleChangeCurrentImage(isNext) {
    let nextIndex
    if (isNext) {
      nextIndex = (currentImageIndex + 1) % (lrgImages.length);
    } else {
      nextIndex = (currentImageIndex - 1 + lrgImages.length) % (lrgImages.length);
    }
    setCurrentImageIndex(nextIndex);
  }

  function handleChangeImageClick(index) {
    setCurrentImageIndex(index);
  }

  const imgGrid = lrgImages.map((url, index) => {
    return (
      <div 
        className={currentImageIndex === index ? 'grid-img-container active': 'grid-img-container'}
        key={url}
        >
        <img
          onClick={() => handleChangeImageClick(index)}
          src={`/${url}`} 
          alt="some dynamic alt tag"/>
      </div>
    )
  })

  return (
    <div className="product-img-component">
      <div className="lrg-image-container">
        {multipleImages && <button className="previous-icon">
          <img 
            onClick={() => handleChangeCurrentImage(false)}
            src={IconPrevious} 
            alt="previous image icon"/>
        </button>}
        <img 
          src={`/${lrgImages[currentImageIndex]}`} 
          alt="Some dynamic alt"
          className="display-img"
        />
        {multipleImages && <button className="next-icon">
          <img
            onClick={() => handleChangeCurrentImage(true)}
            src={IconNext} 
            alt="next image icon"/>
        </button>}
      </div>
      {multipleImages &&
        <div className="thumbnails-container">
          {imgGrid}
        </div>
      }
    </div>
  )
};

export default ProductImage;
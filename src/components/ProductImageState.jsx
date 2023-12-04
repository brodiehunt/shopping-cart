import {useState} from 'react';
import ProductImage from './ProductImage.jsx';
import IconExit from '../assets/icon-exit-orange.svg';
import IconNext from '../assets/icon-next.svg';
import IconPrevious from '../assets/icon-previous.svg';
const ProductImageState = ({lrgImages}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const multipleImages = lrgImages.length > 1 ? true : false;
  
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

  function toggleModal() {
    console.log('registered click')
    setModalOpen(!modalOpen);
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
    <>
    {modalOpen &&
      <div className="modal">
        <button className="exit-btn" onClick={toggleModal}>
          <img src={IconExit} alt="Exit modal button icon"/>
        </button> 
        <ProductImage 
          lrgImages={lrgImages}
          multipleImages={multipleImages}
          currentImageIndex={currentImageIndex}
          handleChangeCurrentImage={handleChangeCurrentImage}
          toggleModal={toggleModal}
          imgGrid={imgGrid}
        />
      </div>
    }
    <div className="product-img-component">
      <div className="lrg-image-container">
        {multipleImages && <button className="previous-icon">
          <img 
            onClick={() => handleChangeCurrentImage(false)}
            src={IconPrevious} 
            alt="previous image icon"/>
        </button>}
        <img 
          onClick={toggleModal}
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
    </>
  )
};

export default ProductImageState;
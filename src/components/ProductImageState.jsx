import {useState} from 'react';
import ProductImage from './ProductImage.jsx';
import IconExit from '../assets/icon-exit-orange.svg';

const ProductImageState = ({lrgImages}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const multipleImages = lrgImages.length > 1 ? true : false;
  
  function handleChangeCurrentImage(event, isNext) {
    event.stopPropagation();
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
          src={url} 
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
    <ProductImage 
      lrgImages={lrgImages}
      multipleImages={multipleImages}
      currentImageIndex={currentImageIndex}
      handleChangeCurrentImage={handleChangeCurrentImage}
      toggleModal={toggleModal}
      imgGrid={imgGrid}
    />
    </>
  )
};

export default ProductImageState;
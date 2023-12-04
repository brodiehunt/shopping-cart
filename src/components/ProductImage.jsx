import IconExit from '../assets/icon-close.svg';
import IconNext from '../assets/icon-next.svg';
import IconPrevious from '../assets/icon-previous.svg';

const ProductImage = (
  {
    lrgImages, 
    currentImageIndex,
    multipleImages, 
    handleChangeCurrentImage,
    toggleModal, 
    imgGrid
  }) => {

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
          onClick={() => toggleModal()}
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
}

export default ProductImage;
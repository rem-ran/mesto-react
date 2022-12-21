function ImagePopup() {
  return (
    <section className="popup image-zoom">
      <figure className="image-zoom__container">
        <img 
          className="image-zoom__image" 
          src="#" 
          alt="#" />
        <button
          className="popup__close-btn image-zoom__close-btn"
          aria-label="Close"
          type="button"
        ></button>
        <figcaption className="image-zoom__caption"></figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup;
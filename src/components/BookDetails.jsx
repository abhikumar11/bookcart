
const BookDetails = () => {
  return (
    <div>
      <div className="left-section">
        <img src="" alt=""/>
      </div>
      <div className="middle-section">
            <div className="mid-top-section">
              <p>Book Title</p>
              <p>Author</p>
            </div>
            <div className="mid-center-section">
              <p>Book discription</p>
            </div>
            <div className="mid-bottom-section">
              <div className="page-length">
                  <p>no of pages</p>
              </div>
              <div className="publisher">
                  <p>publisher</p>
              </div>
              <div className="lan">
                  <p>language</p>
              </div>
            </div>
      </div>
      <div className="right-section">
        <div className="right-top">
          <p>price</p>
          <p>in stock</p>
        </div>
        <div className="right-center">
          <p>address</p>
          <p>quantity</p>
        </div>
        <div className="right-bottom">
         <button>Add to cart</button>
         <button>Buy now</button>
        </div>
      </div>
    </div>
  )
}

export default BookDetails
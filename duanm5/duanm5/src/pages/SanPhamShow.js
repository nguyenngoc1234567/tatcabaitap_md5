import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { useNavigate } from 'react-router-dom';
import ProductModel from '../models/ProductModel';
import LayoutMaster from '../layouts/LayoutMaster';

function SanPhamShow(props) {
    const {id} = useParams();
    const [product,setProduct] = useState({});
  const image = "http://127.0.0.1:8000/public/assets/product/"

    useEffect( () => {
        ProductModel.find(id).then(res => {
            setProduct(res.data);
        })
        .catch(err => {
            throw err;
        });
    },[] );
    return (
        // <LayoutMaster>
        //     <div className="row gx-4 gx-lg-5 align-items-center">
        //         <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." /></div>
        //         <div className="col-md-6">
        //             {/* <div className="small mb-1">{ product.category }</div> */}
        //             <h1 className="display-5 fw-bolder">{ product.name }</h1>
        //             <div className="fs-5 mb-5">
        //                 <span>{ product.price }</span>
        //             </div>
        //             <p className="lead">{ product.description }</p>
        //             <div className="d-flex">
        //                 {/* <input className="form-control text-center me-3" type="number" value={qty} onChange={ handleQty } /> */}
        //                 {/* <button onClick={ handleAddToCart } className="btn btn-outline-dark flex-shrink-0" type="button">
        //                     <i className="bi-cart-fill me-1"></i>
        //                     Add to cart
        //                 </button> */}
        //             </div>
        //         </div>
        //     </div>
        // </LayoutMaster>
         <LayoutMaster> 
         <section className="main-content">
         <div className="row">
           <div className="span9">
             <div className="row">
               <div className={ product.category }>
                 <a
                   href="../assets/images/ladies/1.jpg"
                   className="thumbnail"
                   data-fancybox-group="group1"
                   title="{ product.description }"
                 >
                   <img
                     alt="website template image"
                     src={`${image}${product.image}`}
                   />
                 </a>
                 
               </div>
               <div className="span5">
                 <address>
                   <strong><h3>loại xe</h3> </strong> <span><h4>{ product.name }</h4></span>
                   <br />
                 </address>
                 <h4>
                   <strong>Price:</strong> <span>{ product.price }</span>
                 </h4>
               </div>
               {/* <div className="span5">
                 <form action="#" method="post" className="form-inline">
                  
                   <br />
                   <label className="checkbox">
                     <input type="checkbox" defaultValue="" />
                    Lựa chọn của bạn là một sự lựa chọn tuyệt vời 
                   </label>
                   <p>&nbsp;</p>
                   <label>Qty:</label>
                   <input type="text" className="span1" placeholder={1} />
                   <button className="btn btn-inverse" type="submit">
                     Add to cart
                   </button>
                 </form>
               </div> */}
             </div>
             <div className="row">
               <div className="span9">
                 <ul className="nav nav-tabs" id="myTab">
                   <li className="active">
                     <a href="#home">{ product.description }</a>
                   </li>
                   <li>
                     <a href="#profile">Additional Information</a>
                   </li>
                 </ul>
                 <div className="tab-content">
                   <div className="tab-pane active" id="home">
                  
                    <p> </p>
                   </div>
                   <div className="tab-pane" id="profile">
                     <table className="table table-striped shop_attributes">
                       <tbody>
                         <tr>
                           <th>Size</th>
                           <td>Large, Medium, Small, X-Large</td>
                         </tr>
                         <tr className="alt">
                           <th>Colour</th>
                           <td>Orange, Yellow</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                 </div>
               </div>
               
             </div>
           </div>
           <div className="span3 col">
             <div className="block">
               <ul className="nav nav-list">
                 <li className="nav-header">SUB CATEGORIES</li>
                 <li>
                   <a href="products.php">Nullam semper elementum</a>
                 </li>
                 <li className="active">
                   <a href="products.php">Phasellus ultricies</a>
                 </li>
                 <li>
                   <a href="products.php">Donec laoreet dui</a>
                 </li>
                 <li>
                   <a href="products.php">Nullam semper elementum</a>
                 </li>
                 <li>
                   <a href="products.php">Phasellus ultricies</a>
                 </li>
                 <li>
                   <a href="products.php">Donec laoreet dui</a>
                 </li>
               </ul>
               <br />
               <ul className="nav nav-list below">
                 <li className="nav-header">MANUFACTURES</li>
                 <li>
                   <a href="products.php">Adidas</a>
                 </li>
                 <li>
                   <a href="products.php">Nike</a>
                 </li>
                 <li>
                   <a href="products.php">Dunlop</a>
                 </li>
                 <li>
                   <a href="products.php">Yamaha</a>
                 </li>
               </ul>
             </div>
             <div className="block">
               <h4 className="title">
                 <span className="pull-left">
                   <span className="text">Randomize</span>
                 </span>{" "}
                 <span className="pull-right">
                   <a className="left button" href="#myCarousel" data-slide="prev" />
                   <a className="right button" href="#myCarousel" data-slide="next" />
                 </span>
               </h4>
               <div id="myCarousel" className="carousel slide">
                 <div className="carousel-inner">
                   <div className="active item">
                     <ul className="thumbnails listing-products">
                       <li className="span3">
                         <div className="product-box">
                           <span className="sale_tag" />
                           <a href="product-detail.php">
                             <img
                               alt="website template image"
                               src="../assets/images/ladies/7.jpg"
                             />
                           </a>
                           <br />
                           <a href="product-detail.php" className="title">
                             Fusce id molestie massa
                           </a>
                           <br />
                           <a
                             href="https://www.free-css.com/free-css-templates"
                             className="category"
                           >
                             Suspendisse aliquet
                           </a>
                           <p className="price">$261</p>
                         </div>
                       </li>
                     </ul>
                   </div>
                   <div className="item">
                     <ul className="thumbnails listing-products">
                       <li className="span3">
                         <div className="product-box">
                           <a href="product-detail.php">
                             <img
                               alt="website template image"
                               src="../assets/images/ladies/8.jpg"
                             />
                           </a>
                           <br />
                           <a href="product-detail.php" className="title">
                             Tempor sem sodales
                           </a>
                           <br />
                           <a
                             href="https://www.free-css.com/free-css-templates"
                             className="category"
                           >
                             Urna nec lectus mollis
                           </a>
                           <p className="price">$134</p>
                         </div>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>
             <div className="block">
               <h4 className="title">
                 <strong>Best</strong> Seller
               </h4>
               <ul className="small-product">
                 <li>
                   <a href="https://www.free-css.com/free-css-templates">
                     <img
                       src="../assets/images/ladies/1.jpg"
                       alt="website template image"
                     />
                   </a>{" "}
                   <a href="https://www.free-css.com/free-css-templates">
                     Praesent tempor sem
                   </a>
                 </li>
                 <li>
                   <a href="https://www.free-css.com/free-css-templates">
                     <img
                       src="../assets/images/ladies/2.jpg"
                       alt="website template image"
                     />
                   </a>{" "}
                   <a href="https://www.free-css.com/free-css-templates">
                     Luctus quam ultrices rutrum
                   </a>
                 </li>
                 <li>
                   <a href="https://www.free-css.com/free-css-templates">
                     <img
                       src="../assets/images/ladies/3.jpg"
                       alt="website template image"
                     />
                   </a>{" "}
                   <a href="https://www.free-css.com/free-css-templates">
                     Fusce id molestie massa
                   </a>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </section>
       </LayoutMaster>
    );
}

export default SanPhamShow;
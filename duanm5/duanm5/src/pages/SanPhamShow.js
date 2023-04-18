import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { useNavigate } from 'react-router-dom';
import ProductModel from '../models/ProductModel';
import LayoutMaster from '../layouts/LayoutMaster';

function SanPhamShow(props) {
    const {id} = useParams();
    const [product,setProduct] = useState({});
    const formattedPrice = product?.price?.toLocaleString('vi-VN') || 'Price not available';
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
             
             </div>
             <div className="row">
               <div className="span9">
                 <ul className="nav nav-tabs" id="myTab">
                   <li className="active">
                   <p dangerouslySetInnerHTML={{ __html: product.description }} />
                     {/* <a href="#home">{ product.description }</a> */}
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
                 <li className="nav-header">DANH MỤC PHỤ</li>
                 <li>
                   <a href="products.php">những nguyên tố khác </a>
                 </li>
                
                 <li>
                   <a href="products.php">Những sản Phẩm đình đám </a>
                 </li>
                 <li>
                   <a href="products.php">Nguyên tố Nullam semper</a>
                 </li>
               </ul>
               <br />
               <ul className="nav nav-list below">
                 <li className="nav-header">HÃNG XE NỔI TIẾNG</li>
                 <li>
                   <a href="products.php">Kawasaki.</a>
                 </li>
                 <li>
                   <a href="products.php">BMW</a>
                 </li>
                 <li>
                   <a href="products.php">Honda.</a>
                 </li>
                 <li>
                   <a href="products.php">Yamaha</a>
                 </li>
               </ul>
             </div>
             <div className="block">
               <h4 className="title">
                 <span className="pull-left">
                   <span className="text">Ngẫu nhiên hóa</span>
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
                               src={`${image}${product.image}`}
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
                               src={`${image}${product.image}`}
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
                 <strong>Người bán </strong> hàng giỏi nh
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
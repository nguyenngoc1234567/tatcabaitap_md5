// import React from 'react';
// import LayoutMaster from '../layouts/LayoutMaster';


// function detail(props) {
//     return (
//         <LayoutMaster> 
//         <section className="main-content">
//         <div className="row">
//           <div className="span9">
//             <div className="row">
//               <div className="span4">
//                 <a
//                   href="../assets/images/ladies/1.jpg"
//                   className="thumbnail"
//                   data-fancybox-group="group1"
//                   title="Description 1"
//                 >
//                   <img
//                     alt="website template image"
//                     src="../assets/images/ladies/1.jpg"
//                   />
//                 </a>
//                 <ul className="thumbnails small">
//                   <li className="span1">
//                     <a
//                       href="../assets/images/ladies/2.jpg"
//                       className="thumbnail"
//                       data-fancybox-group="group1"
//                       title="Description 2"
//                     >
//                       <img
//                         src="../assets/images/ladies/2.jpg"
//                         alt="website template image"
//                       />
//                     </a>
//                   </li>
//                   <li className="span1">
//                     <a
//                       href="../assets/images/ladies/3.jpg"
//                       className="thumbnail"
//                       data-fancybox-group="group1"
//                       title="Description 3"
//                     >
//                       <img
//                         src="../assets/images/ladies/3.jpg"
//                         alt="website template image"
//                       />
//                     </a>
//                   </li>
//                   <li className="span1">
//                     <a
//                       href="../assets/images/ladies/4.jpg"
//                       className="thumbnail"
//                       data-fancybox-group="group1"
//                       title="Description 4"
//                     >
//                       <img
//                         src="../assets/images/ladies/4.jpg"
//                         alt="website template image"
//                       />
//                     </a>
//                   </li>
//                   <li className="span1">
//                     <a
//                       href="../assets/images/ladies/5.jpg"
//                       className="thumbnail"
//                       data-fancybox-group="group1"
//                       title="Description 5"
//                     >
//                       <img
//                         src="../assets/images/ladies/5.jpg"
//                         alt="website template image"
//                       />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="span5">
//                 <address>
//                   <strong>Brand:</strong> <span>Apple</span>
//                   <br />
//                   <strong>Product Code:</strong> <span>Product 14</span>
//                   <br />
//                   <strong>Reward Points:</strong> <span>0</span>
//                   <br />
//                   <strong>Availability:</strong> <span>Out Of Stock</span>
//                   <br />
//                 </address>
//                 <h4>
//                   <strong>Price: $587.50</strong>
//                 </h4>
//               </div>
//               <div className="span5">
//                 <form action="#" method="post" className="form-inline">
//                   <label className="checkbox">
//                     <input type="checkbox" defaultValue="" />
//                     Option one is this and that
//                   </label>
//                   <br />
//                   <label className="checkbox">
//                     <input type="checkbox" defaultValue="" />
//                     Be sure to include why it's great
//                   </label>
//                   <p>&nbsp;</p>
//                   <label>Qty:</label>
//                   <input type="text" className="span1" placeholder={1} />
//                   <button className="btn btn-inverse" type="submit">
//                     Add to cart
//                   </button>
//                 </form>
//               </div>
//             </div>
//             <div className="row">
//               <div className="span9">
//                 <ul className="nav nav-tabs" id="myTab">
//                   <li className="active">
//                     <a href="#home">Description</a>
//                   </li>
//                   <li>
//                     <a href="#profile">Additional Information</a>
//                   </li>
//                 </ul>
//                 <div className="tab-content">
//                   <div className="tab-pane active" id="home">
//                     Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//                     accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
//                     quae ab illo inventore veritatis et quasi architecto beatae vitae
//                     dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
//                     aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
//                     eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
//                     est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
//                     velit, sed quia non numquam eius modi tempora incidunt ut labore
//                     et dolore magnam aliquam quaerat voluptatem
//                   </div>
//                   <div className="tab-pane" id="profile">
//                     <table className="table table-striped shop_attributes">
//                       <tbody>
//                         <tr>
//                           <th>Size</th>
//                           <td>Large, Medium, Small, X-Large</td>
//                         </tr>
//                         <tr className="alt">
//                           <th>Colour</th>
//                           <td>Orange, Yellow</td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//               <div className="span9">
//                 <br />
//                 <h4 className="title">
//                   <span className="pull-left">
//                     <span className="text">
//                       <strong>Related</strong> Products
//                     </span>
//                   </span>
//                   <span className="pull-right">
//                     <a
//                       className="left button"
//                       href="#myCarousel-1"
//                       data-slide="prev"
//                     />
//                     <a
//                       className="right button"
//                       href="#myCarousel-1"
//                       data-slide="next"
//                     />
//                   </span>
//                 </h4>
//                 <div id="myCarousel-1" className="carousel slide">
//                   <div className="carousel-inner">
//                     <div className="active item">
//                       <ul className="thumbnails listing-products">
//                         <li className="span3">
//                           <div className="product-box">
//                             <span className="sale_tag" />
//                             <a href="product-detail.php">
//                               <img
//                                 alt="website template image"
//                                 src="../assets/images/ladies/6.jpg"
//                               />
//                             </a>
//                             <br />
//                             <a href="product-detail.php" className="title">
//                               Wuam ultrices rutrum
//                             </a>
//                             <br />
//                             <a
//                               href="https://www.free-css.com/free-css-templates"
//                               className="category"
//                             >
//                               Suspendisse aliquet
//                             </a>
//                             <p className="price">$341</p>
//                           </div>
//                         </li>
//                         <li className="span3">
//                           <div className="product-box">
//                             <span className="sale_tag" />
//                             <a href="product-detail.php">
//                               <img
//                                 alt="website template image"
//                                 src="../assets/images/ladies/5.jpg"
//                               />
//                             </a>
//                             <br />
//                             <a href="product-detail.php" className="title">
//                               Fusce id molestie massa
//                             </a>
//                             <br />
//                             <a
//                               href="https://www.free-css.com/free-css-templates"
//                               className="category"
//                             >
//                               Phasellus consequat
//                             </a>
//                             <p className="price">$341</p>
//                           </div>
//                         </li>
//                         <li className="span3">
//                           <div className="product-box">
//                             <a href="product-detail.php">
//                               <img
//                                 alt="website template image"
//                                 src="../assets/images/ladies/4.jpg"
//                               />
//                             </a>
//                             <br />
//                             <a href="product-detail.php" className="title">
//                               Praesent tempor sem
//                             </a>
//                             <br />
//                             <a
//                               href="https://www.free-css.com/free-css-templates"
//                               className="category"
//                             >
//                               Erat gravida
//                             </a>
//                             <p className="price">$28</p>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="item">
//                       <ul className="thumbnails listing-products">
//                         <li className="span3">
//                           <div className="product-box">
//                             <span className="sale_tag" />
//                             <a href="product-detail.php">
//                               <img
//                                 alt="website template image"
//                                 src="../assets/images/ladies/1.jpg"
//                               />
//                             </a>
//                             <br />
//                             <a href="product-detail.php" className="title">
//                               Fusce id molestie massa
//                             </a>
//                             <br />
//                             <a
//                               href="https://www.free-css.com/free-css-templates"
//                               className="category"
//                             >
//                               Phasellus consequat
//                             </a>
//                             <p className="price">$341</p>
//                           </div>
//                         </li>
//                         <li className="span3">
//                           <div className="product-box">
//                             <a href="product-detail.php">
//                               <img
//                                 alt="website template image"
//                                 src="../assets/images/ladies/2.jpg"
//                               />
//                             </a>
//                             <br />
//                             <a href="product-detail.php">Praesent tempor sem</a>
//                             <br />
//                             <a
//                               href="https://www.free-css.com/free-css-templates"
//                               className="category"
//                             >
//                               Erat gravida
//                             </a>
//                             <p className="price">$28</p>
//                           </div>
//                         </li>
//                         <li className="span3">
//                           <div className="product-box">
//                             <span className="sale_tag" />
//                             <a href="product-detail.php">
//                               <img
//                                 alt="website template image"
//                                 src="../assets/images/ladies/3.jpg"
//                               />
//                             </a>
//                             <br />
//                             <a href="product-detail.php" className="title">
//                               Wuam ultrices rutrum
//                             </a>
//                             <br />
//                             <a
//                               href="https://www.free-css.com/free-css-templates"
//                               className="category"
//                             >
//                               Suspendisse aliquet
//                             </a>
//                             <p className="price">$341</p>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="span3 col">
//             <div className="block">
//               <ul className="nav nav-list">
//                 <li className="nav-header">SUB CATEGORIES</li>
//                 <li>
//                   <a href="products.php">Nullam semper elementum</a>
//                 </li>
//                 <li className="active">
//                   <a href="products.php">Phasellus ultricies</a>
//                 </li>
//                 <li>
//                   <a href="products.php">Donec laoreet dui</a>
//                 </li>
//                 <li>
//                   <a href="products.php">Nullam semper elementum</a>
//                 </li>
//                 <li>
//                   <a href="products.php">Phasellus ultricies</a>
//                 </li>
//                 <li>
//                   <a href="products.php">Donec laoreet dui</a>
//                 </li>
//               </ul>
//               <br />
//               <ul className="nav nav-list below">
//                 <li className="nav-header">MANUFACTURES</li>
//                 <li>
//                   <a href="products.php">Adidas</a>
//                 </li>
//                 <li>
//                   <a href="products.php">Nike</a>
//                 </li>
//                 <li>
//                   <a href="products.php">Dunlop</a>
//                 </li>
//                 <li>
//                   <a href="products.php">Yamaha</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="block">
//               <h4 className="title">
//                 <span className="pull-left">
//                   <span className="text">Randomize</span>
//                 </span>{" "}
//                 <span className="pull-right">
//                   <a className="left button" href="#myCarousel" data-slide="prev" />
//                   <a className="right button" href="#myCarousel" data-slide="next" />
//                 </span>
//               </h4>
//               <div id="myCarousel" className="carousel slide">
//                 <div className="carousel-inner">
//                   <div className="active item">
//                     <ul className="thumbnails listing-products">
//                       <li className="span3">
//                         <div className="product-box">
//                           <span className="sale_tag" />
//                           <a href="product-detail.php">
//                             <img
//                               alt="website template image"
//                               src="../assets/images/ladies/7.jpg"
//                             />
//                           </a>
//                           <br />
//                           <a href="product-detail.php" className="title">
//                             Fusce id molestie massa
//                           </a>
//                           <br />
//                           <a
//                             href="https://www.free-css.com/free-css-templates"
//                             className="category"
//                           >
//                             Suspendisse aliquet
//                           </a>
//                           <p className="price">$261</p>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="item">
//                     <ul className="thumbnails listing-products">
//                       <li className="span3">
//                         <div className="product-box">
//                           <a href="product-detail.php">
//                             <img
//                               alt="website template image"
//                               src="../assets/images/ladies/8.jpg"
//                             />
//                           </a>
//                           <br />
//                           <a href="product-detail.php" className="title">
//                             Tempor sem sodales
//                           </a>
//                           <br />
//                           <a
//                             href="https://www.free-css.com/free-css-templates"
//                             className="category"
//                           >
//                             Urna nec lectus mollis
//                           </a>
//                           <p className="price">$134</p>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="block">
//               <h4 className="title">
//                 <strong>Best</strong> Seller
//               </h4>
//               <ul className="small-product">
//                 <li>
//                   <a href="https://www.free-css.com/free-css-templates">
//                     <img
//                       src="../assets/images/ladies/1.jpg"
//                       alt="website template image"
//                     />
//                   </a>{" "}
//                   <a href="https://www.free-css.com/free-css-templates">
//                     Praesent tempor sem
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://www.free-css.com/free-css-templates">
//                     <img
//                       src="../assets/images/ladies/2.jpg"
//                       alt="website template image"
//                     />
//                   </a>{" "}
//                   <a href="https://www.free-css.com/free-css-templates">
//                     Luctus quam ultrices rutrum
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://www.free-css.com/free-css-templates">
//                     <img
//                       src="../assets/images/ladies/3.jpg"
//                       alt="website template image"
//                     />
//                   </a>{" "}
//                   <a href="https://www.free-css.com/free-css-templates">
//                     Fusce id molestie massa
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//       </LayoutMaster>
//     );
// }

// export default Detail;

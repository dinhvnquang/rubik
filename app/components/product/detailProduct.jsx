import React from 'react'
import {Link} from 'react-router';
import SliderDetails from '../home/SliderDetail.jsx'
import Header from '../main/Header.jsx'
import Footer from '../main/Footer.jsx'
import {slideChitiet} from '../../javascript/header.js'
export default class DetailProduct extends React.Component{
constructor(props) {
super(props);
}
componentDidMount() {
slideChitiet();
}
render(){
return(

<div>
	<Header />
	<div className="product-detail">
		<div className="container">
			<div className="row">
				<div className="col-sm-3">
				<div className="danhmuc-sp">
					<h3>DANH MỤC SẢN PHẨM</h3>
					<h4><a  role="button" data-toggle="collapse" href="#collapsePlus1" aria-expanded="false" aria-controls="collapsePlus8" data-parent="#accordion">RUBIK</a></h4>
					<div className="more collapse" id="collapsePlus1">
						<p>Comic Spinner</p>
						<p>Fidget Cube</p>
					</div>
					<h4><a  role="button" data-toggle="collapse" href="#collapsePlus2" aria-expanded="false" aria-controls="collapsePlus8" data-parent="#accordion">Spiner</a></h4>
					<div className="more collapse" id="collapsePlus2">
						<p>Comic Spinner</p>
						<p>Fidget Cube</p>
					</div>
					<h4><a  role="button" data-toggle="collapse" href="#collapsePlus3" aria-expanded="false" aria-controls="collapsePlus8" data-parent="#accordion">Các phụ kiện khác</a></h4>
					<div className="more collapse" id="collapsePlus3">
						<p>Comic Spinner</p>
						<p>Fidget Cube</p>
					</div>
				</div>
				</div>
				<div className="col-sm-9">
					<div className="row">
						<div className="col-sm-7">
							<div className="slider-anh">
								<div className="show-anh">
									<div className="item1 item active">
										<img src= "http://streaming1.danviet.vn/upload/2-2015/images/2015-04-20/1434180134-xdmvde_thuong_20_ixzv.jpg" alt="" />
									</div>
									<div className="item2 item">
										<img src="http://media.tinmoi.vn/2017/01/10/buc-anh-chup-len-nam-than-tau-dien-ngam-hut-dan-mang5.jpg" alt="" />
									</div>
									<div className="item3 item">
										<img src="http://hinhanhdepvip.com/wp-content/uploads/2017/05/anh-gai-dep-nhat.jpg" alt="" />
									</div>
								</div>
								<div className="click-anh">
									<ul>
										<li data="1">
											<img src="http://streaming1.danviet.vn/upload/2-2015/images/2015-04-20/1434180134-xdmvde_thuong_20_ixzv.jpg" alt="" />
										</li>
										<li data="2">
											<img src="http://media.tinmoi.vn/2017/01/10/buc-anh-chup-len-nam-than-tau-dien-ngam-hut-dan-mang5.jpg" alt="" />
										</li>
										<li data="3">
											<img src="http://hinhanhdepvip.com/wp-content/uploads/2017/05/anh-gai-dep-nhat.jpg" alt="" />
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-sm-5">
							<div className="thongtin-sp">
								<h3>YUXIN KEY CHAIN MINI 3.5CM</h3>
								<h4 className="ma">Mã: 336689</h4>
								<h4 className="gia">Gia: 10000d</h4>
								<h4 className="trangthai">Còn Hàng</h4>
								<h4 className="dmuc">Danh mục: Rubik 2x2x2</h4>
								<p><a className="btn-more btn-red" href="#">MUA HÀNG</a></p>
								<div className="one-space"></div>
								<p><a className="btn-more" href="#">THÊM VÀO GIỎ HÀNG</a></p>
							</div>
						</div>
					</div>
					<div className="sec-tab">
  <ul className="group-tab" role="tablist">
    <li role="presentation" className="active"><a href="#mota" aria-controls="mota" role="tab" data-toggle="tab">Mô tả</a></li>
    <li role="presentation"><a href="#danhgia" aria-controls="danhgia" role="tab" data-toggle="tab">Đánh giá</a></li>
  </ul>

  <div className="tab-content">
    <div role="tabpanel" className="tab-pane active" id="mota">
    	<p>
    		Thong tin sản phẩm
    	</p>
    	<p>
    		Thong tin sản phẩm
    	</p>
    	<p>
    		Thong tin sản phẩm
    	</p>
    	<p>
    		Thong tin sản phẩm
    	</p>
    	<p>
    		Thong tin sản phẩm
    	</p>
    	<img src="http://streaming1.danviet.vn/upload/2-2015/images/2015-04-20/1434180134-xdmvde_thuong_20_ixzv.jpg" alt="" />
    	<img src="http://streaming1.danviet.vn/upload/2-2015/images/2015-04-20/1434180134-xdmvde_thuong_20_ixzv.jpg" alt="" />
    </div>
    <div role="tabpanel" className="tab-pane" id="danhgia">
    	<div class="binhluan">
    		<h4>Bình luận</h4>
    	<p>Sản phẩm chất lượng</p>
    	</div>
    	<div className="form-group">
    	<textarea  rows="4" className="form-control" placeholder="Nhập bình luận"></textarea >
    	</div>
    </div>
  </div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</div>
)
}
}
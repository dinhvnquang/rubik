import React from 'react'
import {Link} from 'react-router';
import Header from '../main/Header.jsx'
import Footer from '../main/Footer.jsx'
export default class Cart extends React.Component{
constructor(props) {
super(props);
}
render(){
return(

<div>
	<Header />
	<div className="sec-cart">
		<div className="container">
			<h3 className="text-center">GIỎ HÀNG CỦA BẠN</h3>
			<div className="row">
				<div className="col-sm-8">
					<div className="left-cart">
				<div className="box-cart">
					<div className="row">
						<div className="col-sm-3">
						<div className="image">
							<img src="http://i1266.photobucket.com/albums/jj538/dinhvnquang/sp1_zpssqbqw0b3.png" alt="" />
						</div>
						</div>
						<div className="col-sm-9">
							<h4>Rubic Rubic Rubic Rubic Rubic RubicRubic </h4>
							<h4>Danh mục: Rubik 2x2x2</h4>
							<h4>Giá:  400000đ</h4>
							<div className="group-star"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div>
							<span className="close"><i className="fa fa-times" aria-hidden="true"></i></span>
						</div>
					</div>
				</div>
				<div className="box-cart">
					<div className="row">
						<div className="col-sm-3">
						<div className="image">
							<img src="http://i1266.photobucket.com/albums/jj538/dinhvnquang/sp1_zpssqbqw0b3.png" alt="" />
						</div>
						</div>
						<div className="col-sm-9">
							<h4>Rubic Rubic Rubic Rubic Rubic RubicRubic </h4>
							<h4>Danh mục: Rubik 2x2x2</h4>
							<h4>Giá:  400000đ</h4>
							<div className="group-star"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div>
							<span className="close"><i className="fa fa-times" aria-hidden="true"></i></span>
						</div>
					</div>
				</div>
				<div className="box-cart">
					<div className="row">
						<div className="col-sm-3">
						<div className="image">
							<img src="http://i1266.photobucket.com/albums/jj538/dinhvnquang/sp1_zpssqbqw0b3.png" alt="" />
						</div>
						</div>
						<div className="col-sm-9">
							<h4>Rubic Rubic Rubic Rubic Rubic RubicRubic </h4>
							<h4>Danh mục: Rubik 2x2x2</h4>
							<h4>Giá:  400000đ</h4>
							<div className="group-star"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div>
							<span className="close"><i className="fa fa-times" aria-hidden="true"></i></span>
						</div>
					</div>
				</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="right-cart">
						<h4>Thông tin đơn hàng</h4>
						<table>
							<thead>
								<tr>
									<th>Sản phẩm</th>
									<th>Số lượng</th>
									<th>Giá</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>rubik</td>
									<td>1</td>
									<td>99000</td>
								</tr>
								<tr>
									<td>rubik</td>
									<td>1</td>
									<td>99000</td>
								</tr>
								<tr>
									<td>rubik</td>
									<td>1</td>
									<td>99000</td>
								</tr>
							</tbody>
						</table>
						<hr />
						<p>Thành tiền <span>(Tổng số tiền thanh toán)</span></p>
						<p className="text-right rate">1.3600.000đ</p>
						<p className="text-center">
						<a className="btn-more btn-red" href="#">Thanh toán</a>
						</p>
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
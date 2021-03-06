import React from 'react'
import {Link} from 'react-router';
import Header from '../main/Header.jsx'
import Footer from '../main/Footer.jsx'
export default class Checkout extends React.Component{
constructor(props) {
super(props);
}
render(){
return(

<div>
	<Header />
	<div className="checkout">
		<div className="container">
			<h3>THANH TOÁN</h3>
			<div className="row  row-40">
				<div className="col-sm-7">
					<div className="info-custom">
					<div className="row">
						<div className="col-sm-3">
							<p>Email</p>
						</div>
						<div className="col-sm-9">
							<div className="from-group">
								<input type="text" className="form-control" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-3">
							<p>Họ và tên</p>
						</div>
						<div className="col-sm-9">
							<div className="from-group">
								<input type="text" className="form-control" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-3">
							<p>Địa chỉ</p>
						</div>
						<div className="col-sm-9">
							<div className="from-group">
								<input type="text" className="form-control" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-3">
							<p>Số điện thoại</p>
						</div>
						<div className="col-sm-9">
							<div className="from-group">
								<input type="text" className="form-control" />
							</div>
						</div>
					</div>
				</div>
				</div>
				<div className="col-sm-5">
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
						
					</div>
				</div>
			</div>
			<p className="text-center">
							<a className="btn-more btn-red" href="#">Xác nhận Thanh toán</a>
						</p>
		</div>
	</div>
	<Footer />
</div>
)
}
}
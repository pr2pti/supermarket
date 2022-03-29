import React from 'react'

export default function Contact() {
  return (
    <React.Fragment>
        <div className="agileits_header">
		<div className="container">
			<div className="w3l_offers">
				<p>SALE UP TO 70% OFF. USE CODE "SALE70%" . <a href="products.html">SHOP NOW</a></p>
			</div>
			<div className="agile-login">
				<ul>
					<li><a href="registered.html"> Create Account </a></li>
					<li><a href="login.html">Login</a></li>
					<li><a href="contact.html">Help</a></li>
					
				</ul>
			</div>
			<div className="product_list_header">  
					<form action="#" method="post" className="last"> 
						<input type="hidden" name="cmd" value="_cart"/>
						<input type="hidden" name="display" value="1"/>
						<button className="w3view-cart" type="submit" name="submit" value=""><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
					</form>  
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>

	<div className="logo_products">
		<div className="container">
		<div className="w3ls_logo_products_left1">
				<ul className="phone_email">
					<li><i className="fa fa-phone" aria-hidden="true"></i>Order online or call us : (+0123) 234 567</li>
					
				</ul>
			</div>
			<div className="w3ls_logo_products_left">
				<h1><a href="index.html">super Market</a></h1>
			</div>
		<div className="w3l_search">
			<form action="#" method="post">
				<input type="search" name="Search" placeholder="Search for a Product..." required=""/>
				<button type="submit" className="btn btn-default search" aria-label="Left Align">
					<i className="fa fa-search" aria-hidden="true"> </i>
				</button>
				<div className="clearfix"></div>
			</form>
		</div>
			
			<div className="clearfix"> </div>
		</div>
	</div>

	<div className="navigation-agileits">
		<div className="container">
			<nav className="navbar navbar-default">
							<div className="navbar-header nav_2">
								<button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div> 
							<div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
								<ul className="nav navbar-nav">
									<li className="active"><a href="index.html" className="act">Home</a></li>	
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Groceries<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>All Groceries</h6>
														<li><a href="groceries.html">Dals & Pulses</a></li>
														<li><a href="groceries.html">Almonds</a></li>
														<li><a href="groceries.html">Cashews</a></li>
														<li><a href="groceries.html">Dry Fruit</a></li>
														<li><a href="groceries.html"> Mukhwas </a></li>
														<li><a href="groceries.html">Rice & Rice Products</a></li>
													</ul>
												</div>	
												
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Household<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>All Household</h6>
														<li><a href="household.html">Cookware</a></li>
														<li><a href="household.html">Dust Pans</a></li>
														<li><a href="household.html">Scrubbers</a></li>
														<li><a href="household.html">Dust Cloth</a></li>
														<li><a href="household.html"> Mops </a></li>
														<li><a href="household.html">Kitchenware</a></li>
													</ul>
												</div>
												
												
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Personal Care<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>Baby Care</h6>
														<li><a href="personalcare.html">Baby Soap</a></li>
														<li><a href="personalcare.html">Baby Care Accessories</a></li>
														<li><a href="personalcare.html">Baby Oil & Shampoos</a></li>
														<li><a href="personalcare.html">Baby Creams & Lotion</a></li>
														<li><a href="personalcare.html"> Baby Powder</a></li>
														<li><a href="personalcare.html">Diapers & Wipes</a></li>
													</ul>
												</div>
												
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Packaged Foods<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>All Accessories</h6>
														<li><a href="packagedfoods.html">Baby Food</a></li>
														<li><a href="packagedfoods.html">Dessert Items</a></li>
														<li><a href="packagedfoods.html">Biscuits</a></li>
														<li><a href="packagedfoods.html">Breakfast Cereals</a></li>
														<li><a href="packagedfoods.html"> Canned Food </a></li>
														<li><a href="packagedfoods.html">Chocolates & Sweets</a></li>
													</ul>
												</div>
												
											
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Beverages<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>Tea & Coeffe</h6>
														<li><a href="beverages.html">Green Tea</a></li>
														<li><a href="beverages.html">Ground Coffee</a></li>
														<li><a href="beverages.html">Herbal Tea</a></li>
														<li><a href="beverages.html">Instant Coffee</a></li>
														<li><a href="beverages.html"> Tea </a></li>
														<li><a href="beverages.html">Tea Bags</a></li>
													</ul>
												</div>
							
											</div>
										</ul>
									</li>
									<li><a href="gourmet.html">Gourmet</a></li>
									<li><a href="offers.html">Offers</a></li>
									<li><a href="contact.html">Contact</a></li>
								</ul>
							</div>
							</nav>
			</div>
		</div>
		

	<div className="breadcrumbs">
		<div className="container">
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
				<li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
				<li className="active">Contact</li>
			</ol>
		</div>
	</div>

	<div className="about">
		<div className="w3_agileits_contact_grids">
			<div className="col-md-6 w3_agileits_contact_grid_left">
				<div className="agile_map">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3905851087434!2d-34.90500565012194!3d-8.061582082752993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18d90992e4ab%3A0x8e83c4afabe39a3a!2sSport+Club+Do+Recife!5e0!3m2!1sen!2sin!4v1478684415917" ></iframe>
				</div>
				<div className="agileits_w3layouts_map_pos">
					<div className="agileits_w3layouts_map_pos1">
						<h3>Contact Info</h3>
						<p>1234k Avenue, 4th block, New York City.</p>
						<ul className="wthree_contact_info_address">
							<li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">info@example.com</a></li>
							<li><i className="fa fa-phone" aria-hidden="true"></i>+(0123) 232 232</li>
						</ul>
						<div className="w3_agile_social_icons w3_agile_social_icons_contact">
							<ul>
								<li><a href="#" className="icon icon-cube agile_facebook"></a></li>
								<li><a href="#" className="icon icon-cube agile_rss"></a></li>
								<li><a href="#" className="icon icon-cube agile_t"></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 w3_agileits_contact_grid_right">
				<h2 className="w3_agile_header">Leave a<span> Message</span></h2>

				<form action="#" method="post">
					<span className="input input--ichiro">
						<input className="input__field input__field--ichiro" type="text" id="input-25" name="Name" placeholder=" " required="" />
						<label className="input__label input__label--ichiro" for="input-25">
							<span className="input__label-content input__label-content--ichiro">Your Name</span>
						</label>
					</span>
					<span className="input input--ichiro">
						<input className="input__field input__field--ichiro" type="email" id="input-26" name="Email" placeholder=" " required="" />
						<label className="input__label input__label--ichiro" htmlFor="input-26">
							<span className="input__label-content input__label-content--ichiro">Your Email</span>
						</label>
					</span>
					<textarea name="Message" placeholder="Your message here..." required=""></textarea>
					<input type="submit" value="Submit"/>
				</form>
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>

<div className="footer">
		<div className="container">
			<div className="w3_footer_grids">
				<div className="col-md-3 w3_footer_grid">
					<h3>Contact</h3>
					
					<ul className="address">
						<li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>1234k Avenue, 4th block, <span>New York City.</span></li>
						<li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">info@example.com</a></li>
						<li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+1234 567 567</li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Information</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="about.html">About Us</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="contact.html">Contact Us</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="short-codes.html">Short Codes</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="faq.html">FAQ's</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="products.html">Special Products</a></li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Category</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="groceries.html">Groceries</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="household.html">Household</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="personalcare.html">Personal Care</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="packagedfoods.html">Packaged Foods</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="beverages.html">Beverages</a></li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Profile</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="products.html">Store</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="checkout.html">My Cart</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="login.html">Login</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="registered.html">Create Account</a></li>
					</ul>
					
					
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
		
		<div className="footer-copy">
			
			<div className="container">
				<p>© 2017 Super Market. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
			</div>
		</div>
		
	</div>	
	<div className="footer-botm">
			<div className="container">
				<div className="w3layouts-foot">
					<ul>
						<li><a href="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li><a href="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li><a href="#" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
						<li><a href="#" className="w3_agile_vimeo"><i className="fa fa-vimeo" aria-hidden="true"></i></a></li>
					</ul>
				</div>
				<div className="payment-w3ls">	
					<img src="images/card.png" alt=" " className="img-responsive"/>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>

<script src="assets/js/bootstrap.min.js"></script>

	

<script src="assets/js/minicart.min.js"></script>


<script src="assets/js/skdslider.min.js"></script>
<link href="assets/css/skdslider.css" rel="stylesheet"/>


    </React.Fragment>
  )
}

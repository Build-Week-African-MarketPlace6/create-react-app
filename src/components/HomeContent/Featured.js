import React from 'react';
import '../../assets/css/Featured.css';
import featuredOne from '../../assets/images/alexander-schimmeck-pKSm8hV62eI-unsplash.jpg';
import featuredTwo from '../../assets/images/karim-manjra-fm9wqDNXyQ0-unsplash.jpg';
import featuredThree from '../../assets/images/kristina-balic-M13V8hgvm-E-unsplash.jpg';

class Featured extends React.Component {
	render() {
		return (
			<section id='features'>
				<div className='container'>
					<header>
						<h2>
							 Our <strong>Services</strong> and <strong>Products</strong>
						</h2>
					</header>
					<div className='row aln-center'>
						<div className='col-4 col-6-medium col-12-small'>
							<section>
								<figure class='snip1401'>
									<img src={featuredOne} alt='featured image 1' />
									<figcaption>
										<h3>Procedure Agencies</h3>
										<h6>Who we work with</h6>
									</figcaption>
									<i class='ion-ios-basket-outline'></i>
									<a href='../Procedure'></a>
								</figure>
							</section>
						</div>
						<div className='col-4 col-6-medium col-12-small'>
							<section>
								<figure class='snip1401'>
									<img src={featuredTwo} alt='featured image 1' />
									<figcaption>
										<h3>Anyce Devolent</h3>
										<p>Home goods with African flair.</p>
									</figcaption>
									<i class='ion-ios-basket-outline'></i>
									<a href='../ProductList'></a>
								</figure>
							</section>
						</div>
						<div className='col-4 col-6-medium col-12-small'>
							<section>
								<figure class='snip1401'>
									<img src={featuredThree} alt='featured image 1' />
									<figcaption>
										<h3>Selice Gordon</h3>
										<p>Texture and style bring soaps to life.</p>
									</figcaption>
									<i class='ion-ios-basket-outline'></i>
									<a href='../ProductList'></a>
								</figure>
							</section>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Featured;

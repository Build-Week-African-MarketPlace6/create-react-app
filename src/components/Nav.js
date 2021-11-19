import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

export default function Nav() {
	return (
		<nav id='nav'>
			<ul>
				<li>
					<Link className='white-space nowrap icon solid fa-home' to='/'>
						<span>Home</span>
					</Link>
				</li>

				<li>
					<Link
						className='white-space nowrap icon solid fa-store'
						to='/productList'
					>
						<span>Marketplace</span>
					</Link>
				</li>

				<li></li>
				<li className='icon brands fa-twitter'> </li>
				<li className='icon brands fa-instagram'></li>
				<li className='icon brands fa-dribbble'></li>
				<li className='icon brands fa-facebook-f'></li>
				<li>
					<Link className='white-space nowrap' to='/signup'>
						Account
					</Link>
				</li>
			</ul>
		</nav>
	);
}

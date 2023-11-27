import ChatBubbleLeftRightIcon from '@heroicons/react/24/outline/ChatBubbleLeftRightIcon';
import HomeIcon from '@heroicons/react/24/outline/HomeIcon';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div className='flex flex-col items-center justify-evenly w-24 h-full border-r'>
			<Link className='w-1/2' to='/'>
				<HomeIcon />
			</Link>
			<Link className='w-1/2' to='chat'>
				<ChatBubbleLeftRightIcon />
			</Link>
		</div>
	);
};

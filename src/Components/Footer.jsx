import React from 'react';
import FooterLinksColumn from './FooterLinksColumn';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <FooterLinksColumn
          title='Solutions'
          links={[
            { text: 'Analytics', url: '#' },
            { text: 'Marketing', url: '#' },
            { text: 'Commerce', url: '#' },
            { text: 'Insights', url: '#' },
          ]} />
        <FooterLinksColumn
          title='Support'
          links={[
            { text: 'Pricing', url: '#' },
            { text: 'Documentation', url: '#' },
            { text: 'Guides', url: '#' },
            { text: 'API Status', url: '#' },
          ]} />
        <FooterLinksColumn
          title='Company'
          links={[
            { text: 'About', url: '#' },
            { text: 'Blog', url: '#' },
            { text: 'Jobs', url: '#' },
            { text: 'Press', url: '#' },
            { text: 'Careers', url: '#' },
          ]} />
        <FooterLinksColumn
          title='Legal'
          links={[
            { text: 'Claim', url: '#' },
            { text: 'Policy', url: '#' },
            { text: 'Terms', url: '#' },
          ]} />
      </div>
    </div>
  );
};

export default Footer;
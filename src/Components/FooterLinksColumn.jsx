import React from 'react';

const FooterLinksColumn = ({ title, links }) => {
  return (
    <div>
      <h6 className='font-medium text-gray-400'>{title}</h6>
      <ul>
        {links.map((link, index) => (
          <li key={index} className='py-2 text-sm'>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinksColumn;
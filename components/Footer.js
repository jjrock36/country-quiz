import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="container-md text-gray-100">
        Copyright &copy; <Link href="https://joeyjenson.com">Joey Jenson</Link>{' '}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;

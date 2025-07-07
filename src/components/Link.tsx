import React from 'react';

export interface LinkProps {
  label: string;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
}

const RodeoLink: React.FC<LinkProps> = ({
  label,
  href,
  className = '',
  target = '_self',
  rel = ''
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      style={{
        color: '#06c',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
      className={`hover-underline ${className}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="9" stroke="#06c" strokeWidth="2" />
        <path d="M12 6V18" stroke="#06c" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 12H18" stroke="#06c" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {label}
    </a>
  );
};

export default RodeoLink;
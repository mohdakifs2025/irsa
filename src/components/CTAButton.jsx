import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTAButton({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'secondary'
  onClick,
  className = '',
  icon = true
}) {
  let baseClasses = 'btn-primary';
  if (variant === 'secondary') {
    baseClasses = 'btn-secondary';
  } else if (variant === 'white') {
    baseClasses = 'btn-white';
  } else if (variant === 'dark') {
    baseClasses = 'btn-dark';
  } else if (variant === 'outline-white') {
    baseClasses = 'btn-outline-white';
  } else if (variant === 'outline-dark') {
    baseClasses = 'btn-outline-dark';
  }
  const combinedClass = `${baseClasses} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight className="w-4 h-4 ml-1 stroke-[2.2]" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClass}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button" className={combinedClass}>
      {content}
    </button>
  );
}

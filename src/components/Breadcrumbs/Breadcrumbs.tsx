import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { IBreadcrumdsProps } from '@/interfaces';

const BreadcrumbsComponent: React.FC<IBreadcrumdsProps> = ({ content }: IBreadcrumdsProps) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  };
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {content?.map((item) => (
          <Link underline={item.underline} color={item.color} href={item.href}>
            {item.name}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsComponent;

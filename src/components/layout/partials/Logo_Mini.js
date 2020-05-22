import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo_Mini = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={require('./../../../assets/images/mentor_dome_mini_logo.png')}
            alt="Open"
            width={80}
            height={80} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo_Mini;
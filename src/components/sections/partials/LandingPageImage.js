import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const LandingPageImage = ({
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
            src={require('./../../../assets/images/up.png')}
            alt="Open"
            width={1000}
            height={1000} />
        </Link>
      </h1>
    </div>
  );
}

export default LandingPageImage;
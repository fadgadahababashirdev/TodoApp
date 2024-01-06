import React from 'react';
import { Link } from 'react-router-dom';

const Lists = () => {
  return (
    <div>
      <h1 className='text-light'>This is a list</h1>
    <Link to ="/">
    <button className='btn btn-success'>Home</button>
    </Link>
    </div>
  );
};

export default Lists;

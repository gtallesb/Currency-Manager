import React from 'react';

const Amount = React.forwardRef((props, ref) => {
  return (
    <form className='text-center' onSubmit={props.handleSubmit}>
      <input className="rounded" placeholder='Enter your amount' ref={ref} />
    </form>
  );
});

export default Amount;

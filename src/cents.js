import React from 'react';

function Cents(props) {
  return (
    <div >
      <form onChange={props.handleCents}>
       <p>Would you like to show cents?</p>
       <input type='radio' id="yes" name='cents' value="yes" />
       <label for="yes">Yes</label>
       <input type='radio' id="No" name='cents' value="no" />
       <label for="No">No</label><br />
      </form>
    </div>
  );
}

export default Cents;

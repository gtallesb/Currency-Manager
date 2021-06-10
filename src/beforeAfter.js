import React from 'react';

function BeforeAfter(props) {
  return (
    <div >
      <form onChange={props.handleBeforeAfter}>
       <p>Would you like to have your code/currency before or after your amount?</p>
       <input type='radio' id="before" name='before-after' value="before" />
       <label for="before">Before</label>
       <input type='radio' id="after" name='before-after' value="after" />
       <label for="after">After</label><br />
      </form>
    </div>
  );
}

export default BeforeAfter;

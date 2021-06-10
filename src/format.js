import React from 'react';

function Format(props) {
  return (
    <div >
      <form onChange={props.handleFormat}>
       <p>Which format would you like to use?</p>
       <input type='radio' id="comma" name='format' value="comma" />
       <label for="comma">#,###.##</label><br />
       <input type='radio' id="period" name='format' value="period" />
       <label for="period">#.###,##</label><br />
      </form>
    </div>
  );
}

export default Format;

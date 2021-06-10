import React from 'react';

function CodeDropdown(props) {
  return (
    <div >
      <form onChange={props.handleDropdownChange}>
       <label for="codes">Choose a code:</label>
       <select className="rounded" id="codes" name="codes">
        <option value=""></option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="CNY">CNY</option>
       </select>
      </form>
    </div>
  );
}

export default CodeDropdown;

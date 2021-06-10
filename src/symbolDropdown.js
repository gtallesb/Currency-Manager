import React from 'react';

function SymbolDropdown(props) {
  return (
    <div >
      <form onChange={props.handleDropdownChange}>
       <label for="symbols">Choose a symbol:</label>
       <select className="rounded" id="symbols" name="symbols">
        <option value=""></option>
        <option value="$">$</option>
        <option value="€">€</option>
        <option value="C$">C$</option>
        <option value="¥">¥</option>
       </select>
      </form>
    </div>
  );
}

export default SymbolDropdown;

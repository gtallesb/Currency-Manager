import React from 'react';

function CodeOrSymbol(props) {

  return (
    <div >
      <form>
       <p>For showing your currency, what would you like to use:</p>
       <input type='radio' 
              id="code" 
              name='code-currency' 
              value="code" 
              onChange={props.handleCodeChange}
        />
       <label for="code">Code</label>
       <input type='radio' 
       id="symbol" 
       name='code-currency' 
       value="symbol"
       onChange={props.handleSymbolChange} 
       />
       <label for="symbol">Symbol</label><br />
      </form>
    </div>
  );
}

export default CodeOrSymbol;

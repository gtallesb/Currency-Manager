import React, {useEffect, useRef, useState} from 'react';
import Amount from '../src/amount';
import CodeOrSymbol from '../src/codeOrSymbol';
import CodeDropdown from './codeDropdown';
import BeforeAfter from '../src/beforeAfter';
import Cents from '../src/cents';
import Format from '../src/format';
import SymbolDropdown from '../src/symbolDropdown';
import RenderIf from '../src/renderIf';
import { Container, Col } from 'react-bootstrap';
import Header from '../src/header';

function App() {
  const amountEntered = useRef();

  const [amountEnteredState, setAmountEnteredState] = useState();
  const [isAmountEntered, setIsAmountEntered] = useState(false);
  const [isCodeChecked, setIsCodeChecked] = useState(false);
  const [isSymbolChecked, setIsSymbolChecked] = useState(false);
  const [isFormatChecked, setIsFormatChecked] = useState(false);
  const [isAnOptionSelected, setIsAnOptionSelected] = useState(false);
  const [showCents, setShowCents] = useState(false);
  const [inputCode, setInputCode] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAmountEntered(true);
    setAmountEnteredState(amountEntered.current.value);
  }

  const handleCents = (e) => {
    setShowCents(true);
    if (e.target.value === 'yes')
    setAmountEnteredState(parseInt(amountEnteredState).toFixed(2))
     else if (e.target.value === 'no') 
     setAmountEnteredState(Math.round(parseInt(amountEnteredState)))
 }

 useEffect(()=> {
   if (Number.isInteger(amountEnteredState))
  amountEntered.current.value = amountEnteredState
  else if(amountEnteredState !== undefined)
  amountEntered.current.value = amountEnteredState;
})

  const handleCodeChange = (e) => {
    if (e.target.checked)
     setIsCodeChecked(true);
     setIsSymbolChecked(false);
  }

  const handleSymbolChange = (e) => {
    if (e.target.checked)
     setIsSymbolChecked(true);
     setIsCodeChecked(false);
  }


  const handleDropdownChange = (e) => {
     setIsAnOptionSelected(true);
     setInputCode(e.target.value);
  }

  const handleFormat = (e) => {
    setIsFormatChecked(true);
    if (e.target.value === 'comma')
    setAmountEnteredState(amountEnteredState.replace(/\d(?=(\d{3})+\.)/g, '$&,'))
    amountEntered.current.value = amountEnteredState
      if (e.target.value === 'period')
       setAmountEnteredState(amountEnteredState.replace(/[.]+/g, ',')
                                               .replace(/\d(?=(\d{3})+[,])/g, '$&.'))
       amountEntered.current.value = amountEnteredState
  }

 const handleBeforeAfter = (e) => {
  if (e.target.value === 'before')
    amountEntered.current.value = inputCode + amountEnteredState
    else 
     amountEntered.current.value = amountEnteredState + inputCode;
}

  return (
    <Container>
     <Col lg={true}>
       <Header />
      <Amount handleSubmit={handleSubmit} ref={amountEntered} />
      <RenderIf isTrue={isAmountEntered}>
       <Cents handleCents={handleCents}/>
      </RenderIf>
      <RenderIf isTrue={showCents}>
       <Format handleFormat={handleFormat}/>
      </RenderIf>
      <RenderIf isTrue={isFormatChecked}>
       <CodeOrSymbol handleCodeChange={handleCodeChange} handleSymbolChange={handleSymbolChange}/>
      </RenderIf>
      <RenderIf isTrue={isCodeChecked} >
       <CodeDropdown handleDropdownChange={handleDropdownChange} />
      </RenderIf>
      <RenderIf isTrue={isSymbolChecked && !isCodeChecked} >
       <SymbolDropdown handleDropdownChange={handleDropdownChange} />
      </RenderIf>
      <RenderIf isTrue={isAnOptionSelected}>
       <BeforeAfter handleBeforeAfter={handleBeforeAfter} />
      </RenderIf>
    </Col>
   </Container>
  );
}

export default App;

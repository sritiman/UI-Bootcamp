import './App.css';
import PageElement from './Components/PageElement';
import ShowAlertComp from "./Components/ShowAlertComp";
import {pageElements} from "./shared/pageElements";

function App() {

  const constructPageElement = ({htmlElementName, innerHTML, style}, index)=> {
    if(!Array.isArray(innerHTML)) {
      return <PageElement htmlElementName={htmlElementName} style={style} key={index}>{innerHTML}</PageElement>;
    }
    return <PageElement htmlElementName={htmlElementName} style={style} key={index}>
                {innerHTML.map((element, index)=> constructPageElement(element, index))}
          </PageElement>
  }

  return <>
  <div>{pageElements.map((element, index)=> constructPageElement(element, index))}</div>
  <ShowAlertComp/>
  </>
}

export default App;

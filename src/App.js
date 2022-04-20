
import './App.css';
import PageElement from './Components/PageElement';
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

  const renderElements = (pageElements)=> {
    return pageElements.map((element, index)=> constructPageElement(element, index))
  }

  return (
    <div className="App">
      { renderElements(pageElements)}
    </div>
  );
}

export default App;

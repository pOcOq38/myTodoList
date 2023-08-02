//Template : 레이아웃을 설정하는 컴포넌트
//Header : 날짜 요일 보여주고 앞으로 해야할 일 몇개 남았는지
//List : 할 일들에 대한 정보가 들어있는 todoitem 렌더링 totos onRemove onToggle
//item : 각 할 일에 대한 정보, toggle 할 일을 완료했는지 여부 todo onRemove onToggle
//Create : 새로운 할 일을 등록할 수 있게 해줌 onCreate

import Template from './components/Template';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import { Provider } from './Context';
import List from './components/List';



function App() {
  const GlobalStyle = createGlobalStyle `
    body{
      background: yellow;
    }
  `;
  return (
   
    <Provider>
    <GlobalStyle/>
    <Header/>
    <List/>
    <Template/>
    </Provider>
  );
}

export default App;

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {LogInPage} from "./screens/LogIn";
import TablePage from "./screens/Table";
import {Header} from "./components/Header";
import {UserPage} from "./screens/UserPage";
import {Container, Wrapper} from "./components/WrapperBg";

import WrapBG from './assets/img/tableBg.png';

import GlobalStyle from "./assets/styles/Global.styled";
import {SummaryPage} from "./screens/Summary";

const App = () => {

  return (
    <>
      <GlobalStyle/>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LogInPage/>
          </Route>
          <Route>
            <Wrapper
              bg={WrapBG}
              height="100vh"
            >
              <Container>
                <Header/>
                <Switch>
                  <Route path="/table">
                    <TablePage/>
                  </Route>
                  <Route path="/user">
                    <UserPage/>
                  </Route>
                  <Route path="/summary">
                    <SummaryPage/>
                  </Route>
                </Switch>
              </Container>
            </Wrapper>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;

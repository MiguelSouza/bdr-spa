import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import {
  NotFoundPage,
  DashboardPage,
  CadastrarMatriculaPage,
  ListaMatriculaPage,
  CadastrarCursoPage,
  ListaCursoPage,
  CadastrarAlunoPage,
  ListaAlunoPage,
  Home,
} from 'components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'
import history from './history'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            {/* General routes */}
            <Route path="/" component={Home} exact />
            <Route exact path="/admin" component={DashboardPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/dashboard" component={DashboardPage} />
            {/* aluno */}
            <Route exact path="/alunos" component={ListaAlunoPage} />
            <Route exact path="/cadastrar-aluno" component={CadastrarAlunoPage} />
            <Route exact path="/editar-aluno" component={CadastrarAlunoPage} />
            {/* curso */}
            <Route exact path="/cursos" component={ListaCursoPage} />
            <Route exact path="/cadastrar-curso" component={CadastrarCursoPage} />
            <Route exact path="/editar-curso" component={CadastrarCursoPage} />
            {/* matricula */}
            <Route exact path="/matriculas" component={ListaMatriculaPage} />
            <Route exact path="/cadastrar-matricula" component={CadastrarMatriculaPage} />
            <Route exact path="/editar-matricula" component={CadastrarMatriculaPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App

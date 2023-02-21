import React from 'react';
// import './i18n';
import './theme/styles/global.scss';
import Routes from './components/router/Routes';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import theme from './theme/themes/theme';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './reactquery/DDQueryClient';
import { SYSTEM_CONSTANTS } from './common/constants';
// import Boilerplate from './pages/Boilerplate';
import { ProjectProvider } from './context/project/ProjectContext';

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={SYSTEM_CONSTANTS.BASE_URL + '/'}>
          <div className="container-inner page-content">
            <QueryClientProvider client={queryClient}>
              <ProjectProvider>
                <Routes />
              </ProjectProvider>
            </QueryClientProvider>
            {/* <Boilerplate /> */}
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;

import React, { Suspense } from 'react';
// import { Redirect, Route, Switch } from 'react-router-dom';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';
// import NotFound from './NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import useViewport from '../../hooks/useViewport';
import Loader from '../Loader';
import Page from './Page';
import { SYSTEM_CONSTANTS } from '../../common/constants';
import { ProjectProvider } from '../../context/project/ProjectContext';

// import { getFeatureListContext } from '../../context/AppDataContext';

const Expectations = React.lazy(() => import('../../pages/Expectations'));
const Suites = React.lazy(() => import('../../pages/Suites'));
const Projects = React.lazy(() => import('../../pages/ProjectLayout'));
const ProjectNoGroup = React.lazy(() => import('../../pages/ProjectNoGroup'));
const ProjectBlank = React.lazy(() => import('../../pages/ProjectBlank'));
const CreateGroup = React.lazy(
  () => import('../../pages/CreateGroupLayoutNodata')
);
const ProjectRuleList = React.lazy(
  () => import('../../pages/CreateGroupLayout')
);
// const Boilerplate = React.lazy(() => import('../../pages/Boilerplate'));

const ROUTES = [
  {
    path: '/expectations',
    exact: true,
    component: Expectations,
    title: SYSTEM_CONSTANTS.APP_NAME || 'ADQT',
  },
  {
    path: '/suites',
    exact: true,
    component: Suites,
    title: SYSTEM_CONSTANTS.APP_NAME || 'ADQT',
  },
  {
    path: '/projects',
    exact: true,
    component: Projects,
    title: SYSTEM_CONSTANTS.APP_NAME || 'ADQT',
  },
  {
    path: '/',
    exact: true,
    component: Projects,
    title: SYSTEM_CONSTANTS.APP_NAME || 'ADQT',
  },
  {
    path: '/project/nogroup',
    exact: true,
    component: ProjectNoGroup,
    title: SYSTEM_CONSTANTS.APP_NAME || 'ADQT',
  },
  {
    path: '/projectblank',
    exact: true,
    component: ProjectBlank,
    title: SYSTEM_CONSTANTS.APP_NAME || 'ADQT',
  },
  {
    path: '/createsuite',
    exact: true,
    component: CreateGroup,
    title: SYSTEM_CONSTANTS.APP_NAME || 'ADQT',
  },
  {
    path: '/createsuite/addrules',
    exact: true,
    component: ProjectRuleList,
    title: SYSTEM_CONSTANTS.APP_NAME || 'ADQT',
  },
  // {
  //   path: '/boilerplate',
  //   exact: true,
  //   component: Boilerplate,
  //   title: 'Boiler Plate | ' + SYSTEM_CONSTANTS.APP_NAME || "ADQT",
  // },
  // {
  //   path: '/*',
  //   exact: true,
  //   component: NotFound,
  //   title: 'Page Not Found | ' + SYSTEM_CONSTANTS.APP_NAME || "ADQT",
  // },
];

const Routes: React.FC = () => {
  // const { windowWidth } = useViewport();

  return (
    <>
      <ToastContainer hideProgressBar={true} autoClose={2500} />
      {/* For Showing Loader at component to Global level (useLoading)*/}
      <div id="dd-global-loader"></div>
      <Header />
      <div className="container-inner page-content">
        <Suspense fallback={<Loader />}>
          <ProjectProvider>
            <Switch>
              <Router>
                {ROUTES.map((route, i: number) => {
                  return (
                    <Page
                      key={i}
                      path={route.path}
                      exact={route.exact}
                      render={() => <route.component />}
                      title={route.title}
                    />
                  );
                })}
              </Router>
              {/* <Redirect path="/" to="/home" />
          <Redirect path="*" to="/home" /> */}
              {/* List a generic 404-Not Found route here */}
              {/* <Route path="*">
            <NotFound />
          </Route> */}
            </Switch>
          </ProjectProvider>
        </Suspense>
      </div>
    </>
  );
};

export default Routes;

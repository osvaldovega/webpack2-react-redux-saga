// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'intro',
      getComponent(nextState, cb) {
        import('containers/IntroPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/apod',
      name: 'apod',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ApodPage/reducer'),
          import('containers/ApodPage/sagas'),
          import('containers/ApodPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('apodContainer', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/curiosity',
      name: 'curiosity',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/CuriosityPage/reducer'),
          import('containers/CuriosityPage/sagas'),
          import('containers/CuriosityPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('curiosityContainer', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
  ];
}

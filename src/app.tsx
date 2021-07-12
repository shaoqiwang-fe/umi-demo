import { history } from 'umi';

export function onRouteChange({ location }: { location: Location }) {
  history.replace(location.pathname);
}

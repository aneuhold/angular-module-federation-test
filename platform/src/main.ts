import { initFederation } from '@angular-architects/native-federation';

const remotes = {
  product1: 'http://localhost:4201/remoteEntry.json',
  product2: 'http://localhost:4202/remoteEntry.json'
};

initFederation(remotes)
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { SharedUi } from '@nx-react-monorepo/shared-ui'
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <SharedUi/>
      <NxWelcome title="first-dir" />
    </div>
  );
}

export default App;

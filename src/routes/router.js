import { useContext } from 'react';
import ProtectedRoutes from './routes.protected.js';
import PublicRoutes from './routes.open.js';

import { AuthContext } from '../context/auth.js';

function Routes() {

     const { user } = useContext(AuthContext);

     return (
          user.id_user ? <ProtectedRoutes /> : <PublicRoutes />
     );
}

export default Routes;
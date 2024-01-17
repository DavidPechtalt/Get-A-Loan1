import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
/**
 * Only allows navigation to a route if a condition is met.
 * Otherwise, it redirects to a different specified route.
 */
export default function ConditionalRoute({ condition, redirectTo, children }) {
    
 
  return condition ? <>{children}</> : <Navigate to={redirectTo} replace />;
}

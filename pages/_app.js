import '../styles/globals.css'
import { AuthProvider } from '../contexts/AuthContext';

import {library} from '@fortawesome/fontawesome-svg-core';
import { faJsSquare,
  faHtml5,
  faCss3,
  faNodeJs,
  faReact,
  faPython,
  faVuejs,
  faAngular,
  faFigma, } from '@fortawesome/free-brands-svg-icons'

library.add(faJsSquare,
  faHtml5,
  faCss3,
  faNodeJs,
  faReact,
  faPython,
  faVuejs,
  faAngular,
  faFigma,);

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp

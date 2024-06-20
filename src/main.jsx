import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirebaseAppProvider } from 'reactfire'
import {firebaseConfig} from './firebase-config.js'
import { AuthContext } from './context/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<div>Loading...</div>}>
    <AuthContext.Provider value={{}}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AuthContext.Provider>
    </Suspense>
  </FirebaseAppProvider>
)
)

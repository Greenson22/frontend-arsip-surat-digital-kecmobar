import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import Router from "./config/Router"

import store from './redux/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import './style.css'
import './animation_style.css'

// --- LOGIKA PENAMBAHAN HOSTNAME DIMULAI DI SINI ---
// 1. Cek apakah 'hostname' sudah ada di localStorage
if (!localStorage.getItem('hostname')) {
  // 2. Jika tidak ada, buat item baru dengan nilai dari environment variable
  localStorage.setItem('hostname', import.meta.env.VITE_HOSTNAME_LOCAL);
}
// --- LOGIKA PENAMBAHAN HOSTNAME SELESAI ---

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router/>
    </Provider>
  </React.StrictMode>,
)

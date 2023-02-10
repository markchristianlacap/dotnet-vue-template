import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.prod.css'
import { Dialog, Loading, Notify, Quasar } from 'quasar'
import { type UserModule } from '~/types/module'

export const install: UserModule = ({ app }) => {
  app.use(Quasar, {
    config: {
      brand: {
        primary: '#06486d',
        negative: '#E74C3C',
        positive: '#27AE60',
        warning: '#F39C12',
        secondary: '#2980B9',
        info: '#16A085',
        dark: '#2C3E50',
      },
      notify: {
        position: 'bottom-right',
      },
    },
    plugins: {
      Notify,
      Dialog,
      Loading,
    },
  })
}

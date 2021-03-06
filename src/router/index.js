import Vue from 'vue'
import Router from 'vue-router'

import Accueil          from '@/components/Accueil'
import Liste_projet     from '@/components/Liste_projet'
import Projet           from '@/components/Projet'
import Histoire         from '@/components/Histoire'
import Contact          from '@/components/Contact'
import Mention          from '@/components/Mention'
import Politique        from '@/components/Politique'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',                name: 'Accueil',              component: Accueil } ,
    { path: '/listeprojet',     name: 'Liste_projet',         component: Liste_projet },
    { path: '/projet/:id',      name: 'Projet',               component: Projet },
    { path: '/histoire',        name: 'Histoire',             component: Histoire },
    { path: '/contact',         name: 'Contact',              component: Contact },
    { path: '/mention',         name: 'Mention',              component: Mention },
    { path: '/politique',         name: 'Politique',            component: Politique },

  ]
})



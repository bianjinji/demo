import {createRouter,createWebHashHistory, createWebHistory} from 'vue-router'
import Props from '@/pages/01-props/Father.vue'
import Event from '@/pages/02-custom-event/Father.vue'
import Bus from '@/pages/03-mitt/Father.vue'
import Model from '@/pages/04-v-model/Father.vue'
import AttrsListeners from '@/pages/05-$attrs/Father.vue'
import RefChildrenParent from '@/pages/06-$refs与$parent/Father.vue'
import ProvideInject from '@/pages/07-provide-inject/Father.vue'
import Pinia from '@/pages/08-pinia/Father.vue'
import Slot from '@/pages/09-slot-默认插槽/Father.vue'
import Slot_1 from '@/pages/09-slot-具名插槽/Father.vue'
import Slot_2 from '@/pages/09-slot-作用域插槽/Father.vue'

export default createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/props',
            component:Props
        },
        {
            path:'/event',
            component:Event
        },
        {
            path:'/mitt',
            component:Bus
        },
        {
            path: '/model',
			component: Model
        },
        {
            path: '/attrs',
			component: AttrsListeners
        },
        {
            path: '/ref-parent',
			component: RefChildrenParent
        },
        {
            path: '/provide-inject',
			component: ProvideInject
        },
        {
			path: '/pinia',
			component: Pinia
		},
		{
			path: '/slot',
			component: Slot
		},
        {
			path: '/slot_1',
			component: Slot_1
		},
        {
			path: '/slot_2',
			component: Slot_2
		}
    ]
})
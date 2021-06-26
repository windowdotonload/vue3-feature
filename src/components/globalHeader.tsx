/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import { defineComponent, PropType } from "vue";
import { userProps } from '@/types/types'


export default defineComponent({
    name: 'GlobalHeader',
    props: {
        user: {
            type: Object as PropType<userProps>,
            required: true
        }
    },
    setup(props) {
        return () => {
            return (
                <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
                    <a class="navbar-brand" href="#">者也专栏</a>
                    <ul v-if={!props.user.isLogin} class="list-inline mb-0">
                        <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登陆</a></li>
                        <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
                    </ul>
                    <ul v-else class="list-inline mb-0">
                        <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">你好 {props.user.name}</a></li>
                    </ul>
                </nav>
            )
        }
    }
})
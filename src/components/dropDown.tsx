/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        }
    },
    setup(props) {
        return () => {
            return (
                <div>{props.title}</div>
            )
        }
    }
})

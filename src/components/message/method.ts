import {h, render, shallowReactive} from "vue"
import {CreateMessageProps, MessageContext} from './types'
import Message from "./message.vue"

const instances: MessageContext[] = shallowReactive([])
let seed = 1
let zIndex = 0

export function createMessage(props: CreateMessageProps) {
    const id = `message_${seed++}`
    const z = zIndex++
    const container = document.createElement('div')
    const manualDestroy = () => {
        const instance = instances.find(instance => instance.id === id)
        if (instance) {
            instance.vm.exposed!.visible.value = false
        }
    }

    const destory = () => {
        const idx = instances.findIndex(instance => instance.id === id)
        if (idx !== -1) {
            instances.splice(idx, 1)
        } else {
            return
        }
        render(null, container)
    }
    const newProps = {
        onDestory: destory,
        id,
        zIndex: z,
        ...props,
    }
    const vnode = h(Message, newProps)
    render(vnode, container)
    document.body.appendChild(container.firstElementChild!)
    const vm = vnode.component!
    const instance = {
        id,
        vnode,
        props: newProps,
        vm,
        destory: manualDestroy
    }
    instances.push(instance)
    return instance
}

export function getLastInstance() {
    return instances.at(-1)
}

export function getLastBottomOffset(id: string) {

    const idx = instances.findIndex(instance => instance.id === id)
    if (idx <= 0) {
        return 0
    } else {
        const prev = instances[idx - 1]
        return prev.vm.exposed!.bottomOffset.value
    }
}
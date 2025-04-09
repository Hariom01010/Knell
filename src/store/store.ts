import { create } from 'zustand';

type State = {
    mode: string
}

type Action = {
    setModeLight: ()=>void
    setModeDark: ()=>void
}

const useStore = create<State & Action>((set)=>({
    mode: 'light',
    setModeLight: () => set({mode: 'light'}),
    setModeDark: () => set({mode: 'dark'})
}))

export default useStore
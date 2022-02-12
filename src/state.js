import { atom } from 'recoil';

export const filesState = atom({
    key: "filesState",
    default: [],
})

export const userDefinedOrderState = atom({
    key: "userDefinedOrderState",
    default: [],
})

export const proccesedFileState = atom({
    key: "processedFileState",
    default: [],
})

export const targetUrlState = atom({
    key: "targetUrlState",
    default: "",
})
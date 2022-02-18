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
    default: " ",
})

export const buttonTextState = atom({
    key: "buttonTextState",
    default: " ",
})

export const acceptedFormatState = atom({
    key: "acceptedFormatState",
    default: "application/pdf",
})

export const pdfMessageState = atom({
    key: "pdfMessageState",
    default: " ",
})

export const allowMultipleState = atom({
    key: "allowMultipleState",
    default: " ",
})
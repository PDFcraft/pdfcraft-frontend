import { atom } from 'recoil';

export const filesState = atom({
    key: "filesState",
    default: [],
})

export const userDefinedOrderState = atom({
    key: "userDefinedOrderState",
    default: [],
})

export const processedFileState = atom({
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
    default: "Drag'n'drop pdf, or click to select pdf",
})

export const allowMultipleState = atom({
    key: "allowMultipleState",
    default: false,
})

export const passwordState = atom({
    key: "passwordState",
    default: "",
})

export const retypePasswordState = atom({
    key: "retypePasswordState",
    default: "",
})

export const flagProcessedState = atom({
    key: "flagProcessed",
    default: false,
})

export const angleState = atom({
    key:"angle",
    default:"360",
})
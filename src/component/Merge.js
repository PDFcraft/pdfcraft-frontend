import React, { useState, useEffect } from "react";
import DragItem from "./DragItem";
import DropzoneComponent from "./DropzoneComponent";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const Merge = () => {

    const [items, setItems] = useState([
        {
            id: "item-1",
            content: "item 1"
        },
        {
            id: "item-2",
            content: "item 2"
        },
        {
            id: "item-3",
            content: "item 3"
        },
        {
            id: "item-4",
            content: "item 4"
        },
        {
            id: "item-5",
            content: "item 5"
        }
    ]);
    const onDragEnd = (result) => {
        if (result.destination) {
            const newItems = reorder(
                items,
                result.source.index,
                result.destination.index
            );

            setItems(newItems);
        }
    };


    const [files, setFiles] = useState([]);
    const handleDrop = acceptedFiles => {
        setFiles(acceptedFiles);
    }

    useEffect((items) => {
        console.log("updated")
        setItems(files.map((file, index) => ({
            id: `${index}`,
            content: `${file.name}`
        })));

        console.log(items)
    }, [files])
    return (
        <div>
            <h1>Merge</h1>
            <DropzoneComponent files={files} handleDrop={handleDrop}></DropzoneComponent>
            <DragItem files={files} onDragEnd={onDragEnd} items={items} />
        </div>
    );
};

export default Merge;
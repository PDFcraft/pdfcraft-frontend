import React, { useCallback, useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import * as func from "./func"

// a little function to help us with reordering the result
const DragItem = (props) => {
    const files = props.files;
    const setSortedFiles = props.setSortedFiles;
    const [items, setItems] = useState([]);
    useEffect((items) => {
        setItems(files.map((file, index) => ({
            id: `${index}`,
            content: `${file.name}`
        })));
    }, [files])

    const onDragEnd = useCallback(
        (result) => {
            if (result.destination) {
                const newItems = func.reorder(
                    items,
                    result.source.index,
                    result.destination.index
                );

                setItems(newItems);
            }
        },
        [items]
    );

    useEffect(() => {
        setSortedFiles(items)
    }, [items])

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={func.getListStyle(snapshot.isDraggingOver)}
                        {...provided.droppableProps}
                    >
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={func.getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}
                                    >
                                        <img src="pdf_mark.svg" />
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};
export default DragItem;


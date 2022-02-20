import React, { useCallback, useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filesState, userDefinedOrderState } from "../state";
import * as func from "../utils"

// a little function to help us with reordering the result
const DragItem = (props) => {
    const files = useRecoilValue(filesState)
    const setUserDefinedOrder = useSetRecoilState(userDefinedOrderState)
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
        setUserDefinedOrder(items)
    }, // eslint-disable-next-line
        [items])

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
                                    <div class="drag-box"
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={func.getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}
                                    >
                                        <img src="pdf_mark.svg" alt="pdf-file" />
                                        <span class="drag-box-text">{item.content}</span>
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


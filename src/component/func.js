import Axios from 'axios';

export const UploadFiles = (files, sortedFiles, setMergedFile) => {
    const formData = new FormData();
    for (var i in sortedFiles) {
        for (var j in files) {
            if (files[j].name === Object.values(sortedFiles[i])[1]) {
                formData.append('files', files[j]);
            }
        }
    }
    Axios.post('http://localhost:8080/merge', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }).then((resp) => {
        if (resp.status === 200) {
            console.log(resp.data);
            setMergedFile(resp.data)
        }
    });
};

export const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const grid = 8;

export const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 ${grid}px 0 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle
});

export const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    display: "flex",
    padding: grid,
    overflow: "auto"
});
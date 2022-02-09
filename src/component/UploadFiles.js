import Axios from 'axios';



export const UploadFiles = (files, sortedFiles) => {
    let sortedFileLists = []
    let sortedFileNames = []
    for (var i in sortedFiles) {
        let fileName = sortedFileNames.push(Object.values(sortedFiles[i])[1])
    }
    for (var j in sortedFileNames) {
        for (var k in files) {
            if (files[k].name === sortedFileNames[j]) {
                let addInOrder = sortedFileLists.push(files[k])
            }
        }
    }
    console.log(sortedFileLists)
    const formData = new FormData();
    for (var l in files) {
        formData.append('files', files[l]);
    }
    Axios.post('http://localhost:8080/merge', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }).then((resp) => {
        if (resp.status === 200) {
            console.log('File uploaded');
        }
    });
};
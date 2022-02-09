import Axios from 'axios';



export const UploadFiles = (files, sortedFiles) => {

    console.log(files)
    console.log(sortedFiles)

    const formData = new FormData();
    for (var i in files) {
        formData.append('files', files[i]);
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
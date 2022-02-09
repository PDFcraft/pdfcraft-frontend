import Axios from 'axios';



export const UploadFiles = (files, sortedFiles) => {
    const formData = new FormData();
    for (var i in sortedFiles) {
        for (var j in files) {
            if (files[j].name === Object.values(sortedFiles[i])[1]) {
                formData.append('files', files[j]);
                console.log(files[j])
            }
        }
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
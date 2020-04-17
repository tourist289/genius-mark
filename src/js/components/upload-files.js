(function () {
  const fileCollection = [];
  const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  const uploadList = document.querySelector('#js-upload__list');
  const uploadInput = document.querySelector('#js-upload');

  uploadInput.addEventListener('change',evt => {
    let files = evt.target.files;

    let filesName = evt.target.files[0].name.toLocaleLowerCase();
    //check type file
    let matches = FILE_TYPES.some(it => filesName.endsWith(it) );

    if (matches){ // that for accept input
      Array.from(files).forEach( file => {
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.addEventListener('load', evt => {
          let template = `<img src="${evt.target.result}" alt="">`;
          uploadList.insertAdjacentHTML('beforeend', `<li>${template}</li>`)
        });

        fileCollection.push(file);
      })
    }
  });

// fileCollection for form data
  fileCollection.forEach( (file, i) => {
    formData.append(`images[]`, file );
  });

// =============== upload img
//const inputUpload = ".js-upload-one",
//  imgSelector = ".js-upload__img";
//  const previewFile = () => {
//    let preview = document.querySelector(imgSelector),
//      file    = document.querySelector(inputUpload).files[0],
//      reader  = new FileReader();
//    reader.onloadend =  () => preview.src = reader.result;
//
//    file ?  reader.readAsDataURL(file) : preview.src = "";
//};
// =============== END upload img
})();

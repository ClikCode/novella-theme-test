
function previewImage(event, img){
    console.log(" ello ")
    var reader = new FileReader();
    reader.onload = function(){
      console.log(" there ")
      img.attr("src", reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
};

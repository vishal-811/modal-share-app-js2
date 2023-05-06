const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');


const openModal=() =>{
    console.log("open modal is active");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};


function closeModal(){
    console.log("Close modal is active");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};



//THE WAY OF WRITING  const openModal=() =>   AND  function closeModal()  IS different but both represent a function/method.
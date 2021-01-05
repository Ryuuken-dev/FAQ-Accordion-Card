const paragraphText = document.getElementsByClassName('fyloCard__paragraph')[1];
const hiddenText = document.getElementsByClassName('fyloCard__slideText')[0];
const arrow = document.getElementsByClassName('fyloCard__arrow')[1];
let status = false;

    
        arrow.addEventListener('click', ()=> {
            if(status===false) {
                hiddenText.style.display="block";
                hiddenText.style.fontSize="22px";
                hiddenText.style.opacity="50%";
                paragraphText.style.fontWeight="bold";

                setTimeout(function descriptionSeen() {
                    hiddenText.style.opacity="100%";
                }, 700);
                status = true;
    }    else {
        
        hiddenText.style.opacity="50%";
        status = false

        setTimeout(function descriptionSeen() {
            hiddenText.style.display="none";
            hiddenText.style.opacity="0";
            hiddenText.style.fontSize="0";
            paragraphText.style.fontWeight="normal";
        }, 700);
    
    }
});
      






const $switchBox = document.querySelector('.switchbox');
const $buttons = document.querySelector('.buttons');
const $button00 = document.querySelector('.button00');


$buttons.addEventListener ('click', (event)  => {
    const $switch = event.target;
    const $switchId = $switch.id;
    
    switch($switchId) {
        case "red":
        $switchBox.style.background = $switchId;
        break;
        case "blue":
        $switchBox.style.background = $switchId;
        break;
        case "green":
        $switchBox.style.background = $switchId;
        break;
        case "yellow":
        $switchBox.style.background = $switchId;
        break;

    }

})

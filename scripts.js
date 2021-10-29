var colorUrlMap = {
    "romania" : "media/harta-romaniei.jpg",
    "france" : "media/harta-france.png",
    "macedonia" : "media/harta-macedonia.png"
};

document.querySelector('.select-wrapper').addEventListener('click', function() {
    this.querySelector('.select').classList.toggle('open');
})

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.select').querySelector('.select__trigger span').textContent = this.textContent;
            document.getElementById("country-map").src = colorUrlMap[this.textContent.toLowerCase()]
        }
    })
}

window.addEventListener('click', function(e) {
    const select = document.querySelector('.select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});






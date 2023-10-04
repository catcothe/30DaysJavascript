const panels = document.querySelectorAll('.panel')

function toggleOpen(){
    this.classList.toggle('open');
}

function toggleActive(e){
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

// toggleOpen()  bu şekilde yazılsaydı sayfa yüklendiğinde fonksiyon çalışırdı
// toggleOpen    bu şekilde olması fonksiyonu referans verdiğimiz anlamına gelir yani fonksiyon, tıklandığında çalışır

// querySelector() belirtilen seçici grubuyla eşleşen ilk elemanı döndürürken, querySelectorAll() 
// belirtilen seçici grubuyla eşleşen öğelerin bir statik listesini (NodeList) döndürür
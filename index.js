// Wait until the DOM is fully loaded

const fileInput = document.getElementById('fileUpload');
const submitBtn = document.getElementById('submitBtn'); 
const inputElement = document.getElementById("input");
const paragraph = document.getElementById("paragraph")
const Bits = document.getElementById("bits")
const Name = document.getElementById("Name");
const Clear = document.getElementById('clearBtn'); 


// inputElement.addEventListener("change", handlefiles, true)
// function handlefiles() {
//     const files = this.files
//     console.log(files)
// }   

submitBtn.addEventListener("click", function() {
    const file = fileInput.files[0];
    
    if (file){
        const name = file.name
        const fileSizeBytes = file.size
        const fileSizeBites = file.size * 8

        let humanReadableSize;

        if (fileSizeBytes < 1024) {
            humanReadableSize = `${fileSizeBytes} Bytes`;
        } else if (fileSizeBytes < 1024 * 1024) {
            humanReadableSize = `${(fileSizeBytes / 1024)} Kilobytes (KB)`;
        } else if (fileSizeBytes < 1024 * 1024 * 1024) {
            humanReadableSize = `${(fileSizeBytes / (1024 * 1024))} Megabytes (MB)`;
        } else {
            humanReadableSize = `${(fileSizeBytes / (1024 * 1024 * 1024))} Gigabytes (GB)`;
        }
        Name.innerHTML = `File name: ${name}`
        paragraph.innerHTML = `File size: ${humanReadableSize}`;
        Bits.innerHTML = `File size: ${fileSizeBites} bits`;        
        console.log(`File size: ${fileSizeBites} bits`);
    }else{
        paragraph.innerHTML = `No File Selected`
        console.log('No file selected.');
    }
    
});

Clear.addEventListener("click", function() {
    Name.innerHTML = ""
    paragraph.innerHTML = ""
    Bits.innerHTML = ""
})

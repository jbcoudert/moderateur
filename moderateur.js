var smile = [":-(", ":'-(", ":'-)", ":)", ":(", ":-)"];
var smil = smile.join()
var txtarea = document.getElementById("txt");
var btn = document.getElementsByTagName("button")[0];
var divi = document.getElementsByTagName("div")[0];
i = 0;
//--------------- Pour le 1er smile a chaque fois--------------//

// btn.addEventListener("click", function() {
//     var txtval = txtarea.value;
    
//     for (let i = 0; i < smile.length; i++) {
//         txtval = txtval.replace(smile[i], "---")
//     }
//     divi.innerHTML = txtval
// })
   
//------------Pour tout les smiles même ceux qui se répètent-------------// 
btn.addEventListener("click", function() {
    var txtval = txtarea.value;
    for (let i = 0; i < smile.length; i++) {
        while (txtval.includes(smile[i])) {
            txtval = txtval.replace(smile[i], "---");
            
            divi.innerHTML = txtval
        }
    }
})
   
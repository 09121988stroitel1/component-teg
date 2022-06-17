class TagsInput {
    textInput;
    buttonInput;
    list;
    checkboxInput;
    constructor() {
        this.renderInput();
        this.renderButton();
        this.renderList();
        this.renderCheckbox();
        this.renderComponent();
        this.deleteTeg ();
        this. readOnly ()
    }

    renderInput() {
        this.textInput = document.createElement('input')
        this.textInput.type = "text";
        this.textInput.className = 'text'
          

    }
    renderButton() {
        this.buttonInput = document.createElement('input')
        this.buttonInput.type = 'button'
        this.buttonInput.className = 'button'
        this.buttonInput.value = "add new teg"
        this.buttonInput.onclick = () => { this.buttonAddTegToLocalStorage(); this.remoteTextInput(); this.tagsDraw () }

    }
    renderList() {
        this.list = document.createElement('ol')
        this.list.className = 'tags-area'
       
    }
    renderCheckbox() {
        this.checkboxInput = document.createElement('input')
        this.checkboxInput.type = 'checkbox'
        this.checkboxInput.className = 'checkbox'
    }
    renderComponent() {
        let div = document.getElementById('component')
        div.append(this.textInput)
        document.getElementById('component').append(this.buttonInput)
        document.getElementById('component').append(this.checkboxInput)
        document.getElementById('component').append(this.list)
    }


    buttonAddTegToLocalStorage() {
        const value = this.textInput.value;
        const tagsStr = localStorage.getItem('input');
        const tags = JSON.parse(tagsStr) || [];
        tags.push(value)
        localStorage.setItem('input', JSON.stringify(tags))
       
    }
    remoteTextInput() {
        this.textInput.value = ""
    }

    tagsDraw () {
        const tegLi = document.createElement('li');
        const deleteButton = document.createElement('button');
        const tagsStr = localStorage.getItem('input');
        const tags = JSON.parse(tagsStr);
        const arrLi = []
        tegLi.className = "new-teg";
        deleteButton.className = "button_delete";
        deleteButton.innerHTML = "&#10006";
        tegLi.append(tags[tags.length - 1]);
        tegLi.append(deleteButton);
        console.log(tegLi)
        this.list.append(tegLi)
        arrLi.push(tegLi)
        console.log(arrLi)
    }
    deleteTeg () {
        this.list.onclick = function(e) {
          let btn = e.target.closest('.button_delete');
          if(!btn) {return}
          btn.parentElement.remove();
        }   
    }
    readOnly () {
        this.checkboxInput.addEventListener('change', () => {
                 if(this.checkboxInput.checked) {
                    this.textInput.setAttribute("readOnly", "true");
                    this.buttonInput.disabled = true;
                    this.btn.disabled = true;
                    document.querySelector("button_delete").disabled = true; 
                    document.querySelector('button_delete').setAttribute('disabled', 'disabled')             
                } else {
                    this.textInput.removeAttribute("readOnly")
                    this.buttonInput.disabled = false;
                }
         })
    }


}
window.onload = () => { new TagsInput() }







// button.onclick = function() {
//     let value = document.getElementById('input').value;
//     let teg = document.createElement('li');
//     let delbtn = document.createElement('button');
//     delbtn.className = "button_delit"
//     delbtn.innerHTML = "&#10006"
//     teg.className = "new-teg"
//     teg.append(value)
//     teg.append(delbtn)
//     document.getElementById('tegs-area').append(teg);
//     document.getElementById('input').value = null

//     const tagsStr = localStorage.getItem('input');
//     const tags = JSON.parse(tagsStr) || [];
//     tags.push(value)
//     localStorage.setItem('input', JSON.stringify(tags));
//     console.log(tags)
// };
// document.querySelector('ol').onclick = function(e) {
//     let btn = e.target.closest('.button_delit');
//     if(!btn) {return}
//     btn.parentElement.remove();
// }
// const one = document.querySelector("#checkbox");
// one.addEventListener('change', () => {
//     if(one.checked) {
//     document.getElementById("input").setAttribute("readOnly", "true")
//     // document.
//     } else {
//     document.getElementById("input").setAttribute("readOnly", "false")
//     }
// })






'use strict'

export default class{
    constructor($doc){ //$-Zeichen zeigt, dass 'doc' ein DOM-Konten ist
        this.$doc = $doc //Zugriff von überall möglich
        this.$list = $doc.querySelector("#list")
        let $input = $doc.querySelector("#new-todo")
        $input.addEventListener("change", this.onChangeInput.bind(this)) //'bind' damit 'this' auf das erste übergebene Element verweist
    }

    //neues Listenelement erstellen, nach EventListener
    onChangeInput(ev){
        console.log(ev.target.value)
        let $list = this.$doc.querySelector("#list")
        let $li = this.$doc.createElement("li")
        $li.innerText =ev.target.value
        $list.appendChild($li)
    }
}
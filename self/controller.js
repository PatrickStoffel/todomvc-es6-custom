'use strict'

export default class{
    constructor(view){ //$-Zeichen zeigt, dass 'doc' ein DOM-Konten ist
        let items = this.getItems()
        view.renderItems(items)
        //this.$doc = $doc //Zugriff von überall möglich
        //this.$list = $doc.querySelector(".list")

        view.onAddItem(this.onAddItem)
    }

    onAddItem(item){

    }

    //neues Listenelement erstellen, nach EventListener
    onChangeInput(ev){
        console.log(ev.target.value)
        let $list = this.$doc.querySelector(".list")
        let $li = this.$doc.createElement("li")
        $li.innerText =ev.target.value
        $list.appendChild($li)
    }

    //Mock für Test-Einträge
    getItems(){
        return [
            {
                title: 'Einkaufen'
            },
            {
                title: 'Auto waschen'
            }
        ]
    }
}
'use strict'

export default class{
    constructor(view, store){ //$-Zeichen zeigt, dass 'doc' ein DOM-Konten ist
        this.view = view;
        this.store = store
        //let items = this.getItems().then((items)=> {
        //    view.renderItems(items)
        //})

        this.store.getItem()
            .then(view.renderItems.bind(view))
            .catch(view.renderError.bind(view))

        //this.$doc = $doc //Zugriff von überall möglich
        //this.$list = $doc.querySelector(".list")

        view.registerAddItemHandler(this.onAddItem.bind(this))
    }

    onAddItem(item){
        console.log(item)
        this.view.addItem(item)
        //save to db
        //render item in view
    }

    //neues Listenelement erstellen, nach EventListener
    onChangeInput(ev){
        console.log(ev.target.value)
        let $list = this.$doc.querySelector(".list")
        let $li = this.$doc.createElement("li")
        $li.innerText =ev.target.value
        $list.appendChild($li)
    }
}
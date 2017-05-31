'use strict'

const renderItem = Symbol() //Const vor 'class' definiert renderItem als privat
const onChangeInput =Symbol()

export default class {

    constructor($doc) {
        this.$doc = $doc
        this.$list = this.$doc.querySelector(".todo-list")
        this.$input = this.$doc.querySelector(".new-todo")
        this.$input.addEventListener("change", this[onChangeInput].bind(this)) //'bind' damit 'this' auf das erste übergebene Element verweist
    }

    registerAddItemHandler(handler){
        this.onAddItemHandler = handler
    }


    [onChangeInput](ev){
        //fire event, invoke subscribers
        let item = {
            title: ev.target.value
        }

        this.onAddItemHandler(item)
    }


    renderItems(items) {
        //let $list = this.$doc.querySelector(".todo-list")
        this.$list.innerHTML = items.map(this[renderItem]) //Aufruf von Symbol mit []
/*        items.forEach((item) => {
            let $li = this.$doc.createElement("li")
            $li.innerText = item.text
            $list.appendChild($li)
        })*/
    }

    renderError(error){
        console.log("DEBUG", error)
    }

    addItem(item){
        //this.store.addItem(item)

        console.log("addItem in view", item)
        let $elem = document.createElement('div')
        let html = this[renderItem](item)
        $elem.innerHTML = html //String wird dem dom-note übergeben
        this.$list.appendChild($elem.childNodes[0]) //childNote 0 ist erstes Element des div's
    }


    [renderItem](item){ //Aufruf von Symbol mit []
        return `<li data-id="${item.id}">
            <label>${item.title}</label>
            <button class="destroy"></button>
        </li>`;
    }
}



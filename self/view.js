'use strict'

const renderItem = Symbol() //Const vor 'class' definiert renderItem als privat

export default class {

    constructor($doc) {
        this.$doc = $doc

        let $input = this.$doc.querySelector(".new-todo")
        $input.addEventListener("change", this.onChangeInput.bind(this)) //'bind' damit 'this' auf das erste übergebene Element verweist
    }

    onChangeInput(ev){
        //fire event, invoke subscribers
        console.log(ev)
    }


    renderItems(items) {
        let $list = this.$doc.querySelector(".todo-list")
        $list.innerHTML = items.map(this[renderItem]) //Aufruf von Symbol mit []
/*        items.forEach((item) => {
            let $li = this.$doc.createElement("li")
            $li.innerText = item.text
            $list.appendChild($li)
        })*/
    }

    [renderItem](item){ //Aufruf von Symbol mit []
        return `<li data-id="${item.id}">
            <label>${item.title}</label>
            <button class="destroy"></button>
        </li>`;
    }
}



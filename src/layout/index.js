import template from "./layout.html"

export default class Layout{
    render(){
        $("body").html(template);
    }
}
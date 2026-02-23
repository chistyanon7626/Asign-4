//Job available counter
function createCounter(elementId){
    const element = document.getElementById(element);
    function getValue(){
        return parseInt(element.InnerText) || 0;
    }
    function increase() {
        element.InnerText = getvalue() + 1;
    }
    function decrease(){
        element.InnerText= Math.max(0,getValue()-1);
    }
    function set(value){
        element.InnerText = value;
    }
    return {increase, decrease,set,getValue};
}
// tab empty 
function createEmptyState(elementId){
    const element = document.getElementById(element);
    function show(){
        element.classList.remove("hidden");
    }
    function hide(){
        element.classList.add("hidden");
    }
    return(show,hide);
}
//job count
function createJobLabel(elementId){
    const element =document.getElementById(elementId);
    function update(){
        const cards = document.querySelectorAll("section .card");
        const visibleCards = Array.from(card).filter (
            card => !card.classList.contains("hidden")
        );
        element.innerText = visibleCards.length;
    }
    return{update};
}
//filter
function createFilterModule(emptyState,jobLabel){
    let currentFilter="all";
    function setFilter(filterName){
        currentFilter=filterName;
        apply();
    }
    
}
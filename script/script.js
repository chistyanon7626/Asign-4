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
    function apply(){
        const cards= document.querySelectorAll("section .card");
        let visibleCount=0;
        cards.forEach(card=>{
            const sta =card.getAttribute("data-status");
            let shouldShow=false;
            if (currentFilter === "all") shouldShow = true;
            if (currentFilter === "interviewed" && status === "interview") shouldShow = true;
            if (currentFilter === "rejected" && status === "rejected") shouldShow = true;
            if (shouldShow) {
                    card.classList.remove("hidden");
                    visibleCount++;
                } 
                else {
                    card.classList.add("hidden");
                }

        });
         if (visibleCount === 0) emptyState.show();
          else emptyState.hide();

            jobLabel.update();
    }
    return { setFilter, apply };
}

// Card action
function createCardActions(totalCounter, interviewCounter, rejectedCounter, filterModule) {

  function handleAction(button) {
    const card = button.closest(".card");
    const oldStatus = card.getAttribute("data-status");
    const newStatus = button.innerText.trim().toLowerCase();

    if (oldStatus === newStatus) return;

    card.setAttribute("data-status", newStatus);

    
    const statusLabel = card.querySelector(".status-label");

    if (statusLabel) {
      if (newStatus === "interview") {
        statusLabel.innerText = "Interviewed";
        statusLabel.style.backgroundColor = "#D1FAE5";
        statusLabel.style.color = "#065F46";
      }

      if (newStatus === "rejected") {
        statusLabel.innerText = "Rejected";
        statusLabel.style.backgroundColor = "#FEE2E2";
        statusLabel.style.color = "#991B1B";
      }
    }

    // Update counters
    if (oldStatus === "interview") interviewCounter.decrease();
    if (oldStatus === "rejected") rejectedCounter.decrease();

    if (newStatus === "interview") interviewCounter.increase();
    if (newStatus === "rejected") rejectedCounter.increase();

    filterModule.apply();
}
 function handleDelete(button) {
    const card = button.closest(".card");
    const status = card.getAttribute("data-status");

    totalCounter.decrease();
    if (status === "interview") interviewCounter.decrease();
    if (status === "rejected") rejectedCounter.decrease();

    card.remove();
    filterModule.apply();
  }
   return { handleAction, handleDelete };
}
//initialization
const totalCounter = createCounter("total-counter");
const interviewCounter = createCounter("interviews-counter");
const rejectedCounter = createCounter("rejected-counter");
const emptyState = createEmptyState("empty-message");
const jobLabel = createJobLabel("job-count-label");
const filterModule = createFilterModule(emptyState, jobLabel);
const cardActions = createCardActions(
  totalCounter, interviewCounter,rejectedCounter,filterModule
);


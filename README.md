1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById--selects by id only and returns a single element only.Can not select multiple elements at once. It returns null if the selected element is not found.Use of this is limited.

getElementsByClassName--On the other hand getElementsByClassName can selects by class name, can select multiple element together.It returns empty collection if elements are not found. Returns HTMLcollection.

querySelector--  Selects the first elements by css selectors.returns null if no elements matches. returns single element.

querySelectorAll-- Selects all the elements that  matches a given by vss selectors.  returns them as a Nodelist. can selects multiple elements . it looks like an array. returns empty Nodelist if it dosen't find anything.






2. How do you create and insert a new element into the DOM?

Ans: To create a new element into the DOM whe have to use document.createElement("tag") then add content or attribute like elemnt.textContent = "hello"; then insert into a dom using append() ,parent.append(element) etc.



3. What is Event Bubbling? And how does it work?
A Event Bubbling is a way that java uses to handel events in DOM. when an event happens it first triggers on the elements then it triggers its parents.

example; suppose you click a button first it will trigger the button then it will trigger its parent div then the body then the documents.

button(clicked)---parent div---body--document..like this.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: An Event Delegation is a technique in java script to make the code shorter and better performance..instead of adding event listener to every child we use it on the parent element.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() ---- it just stop the browsers default action like clicking on a submit form it wont relodes new page..
stopPropagation() --- is used for stopping events  from bubbling up to the DOM tree.
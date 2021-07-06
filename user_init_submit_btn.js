/**
 * Action after user initially clicks on the button
 * @Todo remove everything on the page -> render the page
 */

const btn = document.getElementById("user-input-btn");



// on click the button
btn.addEventListener('click', function() {
    // remove the button
    const main = document.getElementById("main-body");
    main.innerHTML = "";
    // render new page
    let input_form = htmlToElement(`<form>
    <div class="form-group">
      <label for="exampleInputEmail1">Your Fav Counters</label>
      <input type="counter" class="form-control" id="user-counter-input" aria-describedby="emailHelp" placeholder="Your Fav Counter">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Your Fav Dishes</label>
      <input type="dishes" class="form-control" id="user-dishes-input" placeholder="Dishes">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="user-submit" class="btn btn-primary" id = "user-submit-btn">Submit</button>
  </form>`);
    main.appendChild(input_form);
});

// button for form submit
// const user_submit = document.getElementById("user-submit-btn");
// add event listener
document.addEventListener('click', user_submit_event_listener);

function user_submit_event_listener(event) {
    let element = event.target;
    if(element.id === "user-submit-btn") {
        event.preventDefault();
        let user_counter = document.getElementById("user-counter-input").value;
        let user_dishes = document.getElementById("user-dishes-input").value;
        const user_input = {
            Counter : user_counter,
            Dishes : user_dishes
        };
        console.log(user_input);
    }
    
}


/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
 function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

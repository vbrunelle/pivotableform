console.log("hello world");

var callAPivotUI;
callAPivotUI = function (outputElement, input, inputOpts, overwrite = false, locale = "en") {
    var pui, pForm, submitButton, myDiv;
    pForm = $("<form></form>");
    pui = $("<div></div>").pivotUI(input, inputOpts, overwrite, locale)[0];
    pForm.append(pui);

    submitButton = $("<input type='submit' value='Submit'>");
    pForm.append(submitButton);
    pForm.submit(function (event) {
        var json;
        event.preventDefault(); // empêche le formulaire d'être soumis normalement
        json = pui.recordMap.jsonify();
        return alert("String " + json + " was returned!");
    });

    myDiv = document.querySelector(outputElement);
    myDiv.appendChild(pForm[0]);
    return pui;
};
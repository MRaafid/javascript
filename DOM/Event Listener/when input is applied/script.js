a = document.getElementById("name");
a.addEventListener('change', function (e){e.target.value.length == 0
                                            ? a.style.border = "5px solid black"
                                            : a.style.border = "5px solid red"
                                        })
// it will excute when there is any change made by the user
// e.target refers to the element that triggered the event; in this case it is unde id ="name"; thus when date is added to it, it will triger the event
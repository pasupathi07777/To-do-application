





let add = document.querySelector(".add");
let add_con = document.querySelector(".add-con");
let back = document.querySelector(".icon-1");
let user_input_box = document.querySelector(".user-input-box");
let plus_btn = document.querySelector(".plus_btn");

let input_title = document.querySelector(".input-title");
let input_text = document.querySelector(".input-text");
let sumit = document.querySelector(".sumit");
let information = document.querySelector(".information");

let continer = [{ id: 1, title: "pasupathi", text: "i am fullstack web developer" }];
let editId = null;

add.addEventListener("click", () => {
    add_con.classList.add("custom-button_2");
    user_input_box.classList.add("block");
    plus_btn.classList.add("hidden");
    user_input_box.classList.remove("hidden");
    // plus_btn.classList.remove("bg-black")
});

back.addEventListener("click", () => {
   
    add_con.classList.remove("custom-button_2");
    setTimeout(fun_1, 1000);
    console.log("cli");
    
    if (sumit.classList.contains("hidden")) {
        setTimeout(recall, 600)
    }
    setTimeout(recall_2, 600)


});

function recall() {
    sumit.classList.remove("hidden")
    plus_btn.classList.remove("hidden");
   
}


sumit.addEventListener("click", () => {
    if (document.querySelector(".input-title").value === "") {
        //  document.querySelector(".input-title").style.border="2px solid red"
        input_title.style.border = "1px solid red";
        input_text.placeholder = 'Enter title';
       
        return

    }else{
        input_title.style.border = "";
        input_text.placeholder = '';

    }
    if (editId !== null) {
        updateItem(editId);
    } else {
        addItem();
    }
    setTimeout(recall_2, 600)
    add_con.classList.remove("custom-button_2");
    setTimeout(fun_1, 500);
    console.log("cli");
    // plus_btn.classList.remove("hidden");
    console.log("sumit");
});

function fun_1() {
    user_input_box.classList.add("hidden");
   
    resetForm();
}
function recall_2() {
   
    plus_btn.classList.remove("hidden");
   
}

function addItem() {
    let obj = {};
    if (input_title.value !== "") {
        obj = {
            id: continer.length + 1,
            title: input_title.value,
            text: input_text.value
        };
    }
    continer.push(obj);
    console.log(continer);
    resetForm();
    content_generator();
}

function updateItem(id) {
    let item = continer.find(item => item.id === parseInt(id));
    if (item) {
        item.title = input_title.value;
        item.text = input_text.value;
    }
    console.log(continer);
    resetForm();
    content_generator();
    editId = null;  // Reset the editId
}

function resetForm() {
    input_title.value = "";
    input_text.value = "";
}

function content_generator(filtered_items = continer) {
    let content = '';
    filtered_items.forEach((e) => {
        // let truncatedText = e.text.length > 20 ? e.text.substring(0, 20) + '...' : e.text
        let truncatedText = e.text?.length > 20 ? e.text.substring(0, 40) + '...' : e.text ?? '';

        console.log(truncatedText)
        let title_text = e.title?.length > 20 ? e.title.substring(0, 10) + '...' : e.title ?? '';

        console.log(truncatedText)





        content += `  <div class="info rounded-xl ">
                           
                           
                            <div class="info  t rounded-xl    p-1 flex flex-col justify-between  "
                                id="${e.id} relative  ">
                                <div class="h-full">
                                    <h1 class="text-center font-semibold capitalize">${title_text}</h1>
                                    <p class="w-full text-wrap text-[14px] h-[50px] px-1">${truncatedText} </p>
                                </div>
                                <div class="icons-box flex justify-between items-center  bottom-0 left-0 right-0 ">
                                    <div class="icons flex gap-1    ">
                                        <div class="edit">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth="1.5" class="w-6 edit cursor-pointer" stroke="currentColor" class="size-6 ">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                        </div>
                                        <div class="del text-black">
                                          
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" class="w-6 text-red-600 delete cursor-pointer">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                              </svg>
                                               
                                        </div>
                                    </div>
                                    <div class="view-btn">
                                        <button type="submit" class="view cursor-pointer bg-blue-200 px-1 rounded text-[14px] t">View</button>
                                    </div>
                                </div>
                            </div>
    
                        </div>`
    });
    information.innerHTML = content;

    let deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            let id = event.currentTarget.closest('.info').id;
            deleteItem(id);
        });
    });

    let editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            let id = event.currentTarget.closest('.info').id;
            editItem(id);
        });
    });

    let view = document.querySelectorAll(".view")
    view.forEach((button) => {
        button.addEventListener("click", (event) => {
            let id = event.currentTarget.closest('.info').id;
            view_btn(id);
        });
    });
}
content_generator()

function deleteItem(id) {
    continer = continer.filter(item => item.id !== parseInt(id));
    content_generator();
}

function editItem(id) {
    let item = continer.find(item => item.id === parseInt(id));
    if (item) {
        input_title.value = item.title;
        input_text.value = item.text;
        editId = id;
        add_con.classList.add("custom-button_2");
        user_input_box.classList.add("block");
        plus_btn.classList.add("hidden");
        user_input_box.classList.remove("hidden");
    }
}
function view_btn(id) {
    let item = continer.find(item => item.id === parseInt(id));
    add_con.classList.add("custom-button_2");
    user_input_box.classList.add("block");
    plus_btn.classList.add("hidden");
    user_input_box.classList.remove("hidden");
    input_title.value = item.title;
    input_text.value = item.text;
    sumit.classList.add("hidden")
}

let search = document.querySelector(".search")

search.addEventListener("keyup", (event) => {
    let user_input = event.target.value.toLowerCase();
    let filtered_items = continer.filter((e) => e.title.trim(" ").toLowerCase().includes(user_input));
    content_generator(filtered_items);
});



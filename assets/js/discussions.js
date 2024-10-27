var Name  = localStorage.getItem("name");
var Social = localStorage.getItem("social");

if (Name !== null && Social !== null && Social !== '[object HTMLInputElement]') {
    document.getElementById("name").value = Name;
    document.getElementById("social").value = Social;
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAMByq0OJm3QXcBZjrvd0_mqQn8bZu-F3k",
    authDomain: "astrophile-2024.firebaseapp.com",
    databaseURL: "https://astrophile-2024-default-rtdb.firebaseio.com",
    projectId: "astrophile-2024",
    storageBucket: "astrophile-2024.appspot.com",
    messagingSenderId: "564618189859",
    appId: "1:564618189859:web:e7962674c48feddfb86596"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const posts = ref(database, 'posts/');

onValue(posts, (snapshot) => {
    let data = snapshot.val();
    for (let id in data) {

        document.getElementById("posts").innerHTML += `
            <div class="card">
                <div class="card-body">

                    <!-- Header -->
                    <div class="mb-3">
                        <div class="row align-items-center">
                            <div class="col-auto">

                                <!-- Avatar -->
                                <a class="avatar">
                                    <img src="../assets/img/avatars/profiles/avatar.jpg" alt="..." class="avatar-img rounded-circle">
                                </a>

                            </div>
                            <div class="col ms-n2">

                                <!-- Title -->
                                <h4 class="mb-1">
                                    ${data[id]['name']}
                                </h4>

                                <!-- Time -->
                                <p class="card-text small text-muted">
                                    <span class="fe fe-clock"></span> ${data[id]['time']}</time>
                                </p>

                            </div>
                            <div class="col-auto">

                                <!-- Dropdown -->
                                <div class="dropdown">
                                    <a class="dropdown-ellipses dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fe fe-more-vertical"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a href="${data[id]['social']}" target="_blank" class="dropdown-item">
                                            View Social Link
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div> <!-- / .row -->
                    </div>

                    <!-- Text -->
                    <p class="mb-3">
                        ${data[id]["content"]}
                    </p>

                </div>
            </div>`;
    }
});

function writeUserData() {
    let name = document.getElementById("name").value;
    let social = document.getElementById("social").value;
    let content = document.getElementById("content").value;

    let now = new Date();
    let formattedDateTime = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    if (name !== "" && social !== "" && content != "") {
        // Generate a unique UUID for each post
        let uuid = uuidv4();
    
        set(ref(database, 'posts/' + uuid), {
            "name": name,
            "time": formattedDateTime,
            "social": social,
            "content": content
        }).then(() => {
            localStorage.setItem("name", name);
            localStorage.setItem("social", social);
            location.reload();
        }).catch((error) => {
            alert("Error. Contact Codejapoe.");
            location.reload();
        })
    } else {
        alert("Input something.")
    }
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

document.getElementById('post-btn').onclick = function() {
    writeUserData();
};

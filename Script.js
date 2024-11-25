/* Controls the toggle menu on mobile*/
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

    /* Main menu activator*/
    function toggleMenu() {
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            
            // change menu icon 
            toggle.querySelector("a").innerHTML = "<p>Menu<span class=\"ph-thin ph-list\"></span></p>";
        } else {
            menu.classList.add("active");
            
            // change X icon 
            toggle.querySelector("a").innerHTML = "<span class='ph-thin ph-x'></span>";
        }
    }
        /* Event Listener */
        toggle.addEventListener("click", toggleMenu, false);

    /* Submenu  activator*/
    const items = document.querySelectorAll(".item");

    function toggleItem() {
        if (this.classList.contains("submenu-active")) {
            this.classList.remove("submenu-active");
        } else if (menu.querySelector(".submenu-active")) {
            menu.querySelector(".submenu-active").classList.remove("submenu-active");
            this.classList.add("submenu-active");
        } else {
            this.classList.add("submenu-active");
        }
        }
            /* Event Listener */
            for (let item of items) {
                if (item.querySelector(".submenu")) {
                item.addEventListener("click", toggleItem, false);
                item.addEventListener("keypress", toggleItem, false);
                }   
            }
    /* Click anywhere to close submenu! */
    function closeSubmenu(e) {
        if (menu.querySelector(".submenu-active")) {
        let isClickInside = menu
            .querySelector(".submenu-active")
            .contains(e.target);
        if (!isClickInside && menu.querySelector(".submenu-active")) {
            menu.querySelector(".submenu-active").classList.remove("submenu-active");
        }
        }
            }
            /* Event listener */
            document.addEventListener("click", closeSubmenu, false);

// Footer
// Click function
function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chromium, Firefox, IE and Opera
  }

//Show email
function outlink1() {
    alert("Email me at N00201997@iadt.ie")
}


//External link LinkedIn
function outlink2() {
    let text;
    if(confirm("Leave to go to external site?") == true) {
        window.location.replace("https://ie.linkedin.com/in/alexander-griffith-lin")
    } else {
        //do nothing
    }
}


//External link GitHub
function outlink3() {
    let text;
    if(confirm("Leave to go to external site?") == true) {
        window.location.replace("https://github.com/AlexanderGriffithLin")
    } else {
        //do nothing
    }
}
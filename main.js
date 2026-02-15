const responsive={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}

$(document).ready(function(){
    
    $nav=$('.nav');
    $togglecollapse= $('.toggle-collapse');

    /* After clicking on toggle menu */
    $togglecollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
     loop: true,
     autoplay: true, 
     autoplayTimeout:3000,  
     dots: false,
     nav: true,
     navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
     responsive: responsive
    });
    
    // AOS instance
    AOS.init()

});

function openForm() {
    document.getElementById("bookingForm").style.display = "block";
}

function closeForm() {
    document.getElementById("bookingForm").style.display = "none";
}

function submitForm(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    alert(
        "Booking Confirmed!\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Email: " + email
    );

    closeForm();
}


    
    function next(){

        hideElementById('homePage')
        showElementById('success')

    }

    function Continue(){

        hideElementById('success')
        showElementById('homePage')


    }

    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }


      // Worked


      const cards = document.querySelectorAll(".seat");

      console.log











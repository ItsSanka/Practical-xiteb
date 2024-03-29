        //header section
        
        let link1 = document.querySelector('.header .mail a');
        let logo1 = document.querySelector('.header .mail .fa-envelope');

        link1.addEventListener('mouseover', () => {
            logo1.style.transition = '500ms'
            logo1.style.background = '#A3ED40';
            logo1.style.color = '#5C8D1A';
            logo1.classList.toggle('animate__headShake')
        })

        link1.addEventListener('mouseout', () => {
            logo1.style.transition = '500ms'
            logo1.style.background = '#5C8D1A';
            logo1.style.color = '#A3ED40';
            logo1.classList.remove('animate__headShake')
        })

        //header section

        let link2 = document.querySelector('.header .call a');
        let logo2 = document.querySelector('.header .call .fa-mobile-screen-button');

        link2.addEventListener('mouseover', () => {
            logo2.style.transition = '500ms'
            logo2.style.background = '#A3ED40';
            logo2.style.color = '#5C8D1A';
            logo2.classList.toggle('animate__headShake')
        })

        link2.addEventListener('mouseout', () => {
            logo2.style.transition = '500ms'
            logo2.style.background = '#5C8D1A';
            logo2.style.color = '#A3ED40';
            logo2.classList.remove('animate__headShake')
        })

        //section-g

        let link3 = document.querySelector('.section-g .call a');
        let logo3 = document.querySelector('.section-g .call .fa-mobile-screen-button');

        link3.addEventListener('mouseover', () => {
            logo3.style.transition = '500ms'
            logo3.style.background = '#A3ED40';
            logo3.style.color = '#5C8D1A';
            logo3.classList.toggle('animate__headShake')
        })

        link3.addEventListener('mouseout', () => {
            logo3.style.transition = '500ms'
            logo3.style.background = '#5C8D1A';
            logo3.style.color = '#A3ED40';
            logo3.classList.remove('animate__headShake')
        })


        //section-g

        let link4 = document.querySelector('.section-g .mail a');
        let logo4 = document.querySelector('.section-g .mail .fa-envelope');

        link4.addEventListener('mouseover', () => {
            logo4.style.transition = '500ms'
            logo4.style.background = '#A3ED40';
            logo4.style.color = '#5C8D1A';
            logo4.classList.toggle('animate__headShake')
        })

        link4.addEventListener('mouseout', () => {
            logo4.style.transition = '500ms'
            logo4.style.background = '#5C8D1A';
            logo4.style.color = '#A3ED40';
            logo4.classList.remove('animate__headShake')
        })

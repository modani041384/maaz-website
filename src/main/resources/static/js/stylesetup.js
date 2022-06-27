
$(() => {

    tailwind.config = {
        theme: {
        extend: {
            colors: {
                color1: getComputedStyle(document.body ).getPropertyValue('--color1').trim(),
                color2: getComputedStyle(document.body ).getPropertyValue('--color2').trim(),
                color3: getComputedStyle(document.body ).getPropertyValue('--color3').trim(),
                color4: getComputedStyle(document.body ).getPropertyValue('--color4').trim(),
                color5: getComputedStyle(document.body ).getPropertyValue('--color5').trim(),
            }
        }
        }
    }
});
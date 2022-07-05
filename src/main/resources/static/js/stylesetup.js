
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
                    color6: getComputedStyle(document.body ).getPropertyValue('--color6').trim(),
                    color7: getComputedStyle(document.body ).getPropertyValue('--color7').trim(),
                    color8: getComputedStyle(document.body ).getPropertyValue('--color8').trim(),
                    color9: getComputedStyle(document.body ).getPropertyValue('--color9').trim(),
                },
                padding: {
                    'section': 'var(--padding-section)',
                    'col-gap': '1.5rem',
                }
            },
            fontSize: {
                'lg': ['44px', {
                    lineHeight: '48px',
                    fontWeight: '700'
                }],
                'hl': ['20px', {
                    lineHeight: '24px',
                    fontWeight: '400'
                }],
                'title': [
                    '32px',
                    {
                        lineHeight: '40px',
                    }
                ],
                'xl': ['60px', {
                    lineHeight: '64px',
                    fontWeight: '700'
                }],
                'item': ['20px', {
                    lineHeight: '28px',
                    fontWeight: '700'
                }],
                'cu': ['24px', {
                    lineHeight: '36px'
                }],
            },
            zIndex: {
                '1': '1',
                '2': '2',
            }
        }
    }
});
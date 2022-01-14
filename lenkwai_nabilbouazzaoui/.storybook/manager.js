import { create } from '@storybook/theming/create';
import {addons} from '@storybook/addons';

const theme = create ({
    base: 'light',
    brandTitle: ' Composantes d\'Emeline et Nabil',  
})

addons.setConfig({
    theme
})
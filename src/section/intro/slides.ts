import development from "./images/development.jpeg";
import administration from "./images/administration.jpeg";
import support from "./images/support.jpeg";
import guarantee from "./images/guarantee.jpeg";
import DoneIcon from '@material-ui/icons/Done';
import DevelopIcon from '@material-ui/icons/DeveloperBoard';
import AdminstrationIcon from '@material-ui/icons/Computer';
import SupportIcon from '@material-ui/icons/ContactSupport';

export default [
    {
        id: 0,
        background: development,
        label: 'slider.development.label',
        header: 'slider.development.header',
        description: 'slider.development.description',
        icon: DevelopIcon,
    },
    {
        id: 1,
        background: administration,
        label: 'slider.administration.label',
        header: 'slider.administration.header',
        description: 'slider.administration.description',
        icon: AdminstrationIcon,
    },
    {
        id: 2,
        background: support,
        label: 'slider.consultation.label',
        header: 'slider.consultation.header',
        description: 'slider.consultation.description',
        icon: SupportIcon,
    },
    {
        id: 3,
        background: guarantee,
        label: 'slider.guarantee.label',
        header: 'slider.guarantee.header',
        description: 'slider.guarantee.description',
        icon: DoneIcon,
    },
];
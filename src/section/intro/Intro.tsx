import React, { useState } from 'react'
import Slide from '@material-ui/core/Slide';
import { Theme } from "@material-ui/core";
import { withStyles, WithStyles, createStyles } from '@material-ui/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DoneIcon from '@material-ui/icons/Done';
import DevelopIcon from '@material-ui/icons/DeveloperBoard';
import AdminstrationIcon from '@material-ui/icons/Computer';
import SupportIcon from '@material-ui/icons/ContactSupport';
import development from './images/development.jpeg';
import guarantee from './images/guarantee.jpeg';
import administration from './images/administration.jpeg';
import support from './images/support.jpeg';
import FormatMessage from "../../locale/FormatMessage";
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import RightPane from "../../pane/RightPane";
import Particles from 'react-particles-js';

const styles = (theme: Theme) => createStyles({
    slider: {
        height: '100%',
        position: 'relative',
    },
    slide: {
        transition: 'opacity 1s',
        opacity: 0,
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    containerWrapper: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
    },
    text: {
        textTransform: 'uppercase',
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem'
        }
    },
    description: {},
    footer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        zIndex: theme.zIndex.appBar
    },
    nav: {
        background: 'none'
    },
    action: {
        color: 'rgba(255, 255, 255, .7)',
        fontSize: '1rem'
    },
    selected: {
        color: '#fff !important',
        fontSize: '1rem !important'
    },
    particles: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: theme.zIndex.appBar - 1
    }
});

interface Props extends WithStyles<typeof styles> {
    width: Breakpoint
}

const slides = [
    {
        id: 0,
        background: development,
        label: 'slider.development.label',
        header: 'slider.development.header',
        description: 'slider.development.description',
        icon: <DevelopIcon />,
    },
    {
        id: 1,
        background: administration,
        label: 'slider.administration.label',
        header: 'slider.administration.header',
        description: 'slider.administration.description',
        icon: <AdminstrationIcon />,
    },
    {
        id: 2,
        background: support,
        label: 'slider.consultation.label',
        header: 'slider.consultation.header',
        description: 'slider.consultation.description',
        icon: <SupportIcon />,
    },
    {
        id: 3,
        background: guarantee,
        label: 'slider.guarantee.label',
        header: 'slider.guarantee.header',
        description: 'slider.guarantee.description',
        icon: <DoneIcon />,
    },
];

const particles = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#fff"
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#fff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
        }
    }
};

const Intro = ({ classes, width }: Props) => {
    const [slide, setSlide] = useState(slides[0]);
    const handleSlide = (index: number) => {
        setSlide(slides[index]);
    };



    return (
        <div className={classes.slider}>
            <Particles
                className={classes.particles}
                params={particles}
            />
            {
                slides.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={classes.slide}
                            style={{
                                opacity: slide.id === index ? 1 : 0,
                                background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.4)), url(${item.background}) center / cover no-repeat`
                            }}
                        >
                            <div className={classes.containerWrapper}>
                                <Container fixed>
                                    <Slide direction={'left'} in={slide.id === index} timeout={1000}>
                                        <Typography variant={"h2"} color={"inherit"} className={classes.text}
                                                    gutterBottom>
                                            <FormatMessage id={item.header} />
                                        </Typography>
                                    </Slide>
                                    <Slide direction={'down'} in={slide.id === index} timeout={1000}>
                                        <Typography variant={"body2"} color={"inherit"}>
                                            <FormatMessage id={item.description} />
                                        </Typography>
                                    </Slide>
                                </Container>
                            </div>
                        </div>
                    )
                })
            }
            <div className={classes.footer}>
                <BottomNavigation
                    value={slide.id}
                    onChange={(event, newValue) => {
                        handleSlide(newValue);
                    }}
                    showLabels
                    className={classes.nav}
                >
                    {slides.map((item, index) => {
                        return (
                            <BottomNavigationAction
                                key={index}
                                label={!isWidthDown('xs', width) && <FormatMessage id={item.label} />}
                                className={classes.action}
                                classes={{
                                    selected: classes.selected,
                                    label: classes.action,
                                }}
                                icon={item.icon}
                            />
                        )
                    })}
                </BottomNavigation>
            </div>
            <RightPane />
        </div>
    )
};

export default withWidth()(withStyles(styles)(Intro))